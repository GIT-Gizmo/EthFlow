require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/d8GmRzypM3P8siEDrwFrZv8Pva9Ed7zA',
      accounts: [ 'f8965ca12b7625e57f5525da3e8aaa852f24233938ec68419dcdc9d18d90c8f4' ]
    }
  }
};
