const { ethers } = require("hardhat");

async function main() {
    const tokenAddress = '0xBEBA0C7952C20Fcae1D881F6Ad3579f1f9C8cdA7'; // Adresse du contrat de token ERC20
    const crowdsaleAddress = '0x98eDc5E454E309614Fe6C6df2095B8EeDb829181'; // Adresse du contrat de Crowdsale
    const tokenAmount = '100000000000000000000000'; // Montant de tokens à approuver

    const Token = await ethers.getContractAt("MonToken", tokenAddress);

    // Assurez-vous que le wallet qui exécute ce script est le propriétaire du token wallet
    // ou est autorisé à approuver des tokens en son nom
    await Token.approve(crowdsaleAddress, tokenAmount); // Approuver l'allowance pour le contrat de Crowdsale

    console.log(`Approved ${tokenAmount} tokens from ${tokenAddress} for Crowdsale at ${crowdsaleAddress}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
