// ether.js comes built in to Hardhat
// ether.js is a really nice library to work with ethereum

// Import ethers
const { ethers } = require("hardhat");

async function main() {
  // Tell the script we want to deploy the 'NFT' contract
  const NFT = await ethers.getContractFactory("NFT");

  // Deploy it
  const deployedContract = await NFT.deploy();

  // Wait for deployment to finish
  await deployedContract.deployed();

  // Print the address of the deployed contract
  console.log("NFT Contract deployed to:", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
