pragma solidity =0.5.16;

import '../FastswapERC20.sol';

contract ERC20 is FastswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
