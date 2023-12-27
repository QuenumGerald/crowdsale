const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const rate = 1000; // Taux de conversion
    const tokenAddress = '0x08b245d9Cd50bE3149587A3aaDb3524c7bD92BEf'; // Adresse du contrat de token ERC20
    const tokenswallet = "0xEc76081eE119656e4814E4EF3B707F59412A2Fb9"; // wallet ou se trouvent les tokens 
    const fundswallet = "0xfAB2450bd0952A28484d61fb633a370c2b64A255"; //wallet qui va recevoir les fonds 

    const Crowdsale = await ethers.getContractFactory("DarvvinCrowdsale");
    const crowdsale = await Crowdsale.deploy(rate, fundswallet, tokenAddress,tokenswallet);

    console.log("Crowdsale address:", await crowdsale.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
