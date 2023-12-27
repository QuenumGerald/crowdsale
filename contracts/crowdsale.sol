pragma solidity ^0.5.0;

import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";
// import "@openzeppelin/contracts/crowdsale/emission/AllowanceCrowdsale.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DarvvinCrowdsale is Crowdsale {

    constructor(
        uint256 rate,            // Taux de conversion entre ETH et le token
        address payable wallet,  // Adresse où collecter les fonds ETH
        IERC20 token          // Le token ERC20 à vendre
    )
        Crowdsale(rate, wallet, token)
        public
    {
        // ajouter une logique supplémentaire si nécessaire
    }
}
