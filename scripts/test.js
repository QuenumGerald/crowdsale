const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const initialSupply = '1000000000000000000000000'
  // Déployer le Token
  const Token = await ethers.getContractFactory("MonToken");
  const token = await Token.deploy(initialSupply);
  await token.deployTransaction.wait();
console.log("Token address:", token.address);}
main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });