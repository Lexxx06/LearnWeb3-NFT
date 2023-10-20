require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

// require("dotenv").config();

module.exports = {
  solidity: "0.8.20", // Corrected the version to "0.8.19"

  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/1hDjvAs8qg98sFf7wbFG_WYPEsECziM8",
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};

