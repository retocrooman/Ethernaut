require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-contract-sizer");
require('dotenv').config();

module.exports = {
  solidity: "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
      runs: 10,
    },
  },
  networks: {
    rinkeby : {
      url: process.env.INFRA,
      accounts: [process.env.KEY],
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: process.env.ETHERSCAN
    }
  }
};
