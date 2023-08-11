// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Auction is ReentrancyGuard {
    // using Address for address payable;
    struct ListedItem {
        uint256 itemId;
        IERC721 nft;
        uint256 tokenId;
        uint256 price;
        uint256 totalBids;
        address payable seller;
        address payable maxBidder;
        uint256 maxBid;
        bool sold;
    }

    address public admin;
    uint256 public itemCount;
    uint256 public startTime;
    uint256 public endTime;

    mapping(uint256 => ListedItem) public listedItems;
    ListedItem[] public allItems;

    event Listed(
        uint256 itemId,
        address indexed nft,
        uint256 tokenId,
        uint256 price,
        address indexed seller
    ); 

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }


    constructor(uint256 duration) {
        admin = msg.sender;
        itemCount = 0;
        startTime = block.timestamp;
        endTime = startTime+duration;
    }


    function listItem(IERC721 _nft, uint256 _tokenId, uint256 _price) public nonReentrant {
          require(_price > 0, "Price must be greater than zero");
          require(block.timestamp<endTime, "Auction has ended");
        
        itemCount++;
        
        _nft.transferFrom(msg.sender, address(this), _tokenId);

        listedItems[itemCount] = ListedItem(
            itemCount,
            _nft,
            _tokenId,
            _price,
            0,
            payable(msg.sender),
            payable(address(0)),
            0,
            false
        );

        allItems.push(listedItems[itemCount]);
        
        emit Listed(
            itemCount,
            address(_nft),
            _tokenId,
            _price,
            msg.sender 
        );
    }

    function bidPrize(uint256 _id, uint256 amount) public  payable nonReentrant{
        require(block.timestamp>startTime, "Auction not started");
        require(block.timestamp<endTime, "Auction is over");
        require(msg.value == amount, "Not the specified amount");
        require(_id<=itemCount && _id>=0, "Item does not exist");
        require(amount>= listedItems[_id].price, "Must be greater than minimum bid");
        require(amount>=listedItems[_id].maxBid, "Must be greater than current maximum bid");

        listedItems[_id].maxBidder.transfer(listedItems[_id].maxBid);
        listedItems[_id].maxBid = amount;
        listedItems[_id].maxBidder = payable(msg.sender);
        allItems[_id-1].maxBid = amount;
        allItems[_id-1].maxBidder = payable(msg.sender);
    }

    function endAuction() public payable onlyAdmin{
        require(block.timestamp>endTime, "Auction is still on");
        for(uint i = 0; i<allItems.length;i++){
            allItems[i].seller.transfer(allItems[i].maxBid);
            allItems.pop();
            listedItems[i+1].nft.transferFrom(address(this), listedItems[i+1].maxBidder, listedItems[i+1].tokenId);
            listedItems[i+1] = listedItems[0];
        }
        itemCount = 0;
        //findMaxBid(itemBids[_id]);
    }
}