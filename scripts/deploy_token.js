const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const initialSupply = '1000000000000000000000000000'; // Approvisionnement initial du token
    console.log("Deploying contracts with the account:", deployer.address);
    const Token = await ethers.getContractFactory("MonToken");
    const token = await Token.deploy(initialSupply);

    console.log("Token address:", await token.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
