const solidity = require('@ethersproject/solidity');
const bytecode = require('./compiled.json');

const { keccak256 } = solidity;
console.log(keccak256(['bytes'], [`0x${bytecode.object}`]), 'init hash code');
