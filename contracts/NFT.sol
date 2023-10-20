// SPDX-License-Identifier: MIT 

// Telling Ethereum which Solidity Version to use when running the script
pragma solidity ^0.8.20;

// Import the standard implementation of ERC721
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Contract 'NFT' is an 'ERC721' contract
contract NFT is ERC721 {
    constructor() ERC721("LearnWeb3 NFT", "LW3-NFT") {
        // Mint 5 NFTs to myself
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);
    }
}
