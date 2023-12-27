require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("@nomicfoundation/hardhat-ignition-ethers");
const INFURA_API_KEY = vars.get("INFURA_API_KEY");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [vars.get("KEY")],
        },
    mumbai: {
      url: `https://polygon-mumbai-bor.publicnode.com`,
      accounts: [vars.get("KEYTOKENWALLET")],
    }    
  },
  solidity: "0.5.5",
  etherscan: {
    apiKey: ""
  }
};
