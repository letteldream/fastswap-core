import pkg from '@ethersproject/solidity';
import bytecode from './compiled.json';

const { keccak256 } = pkg;
console.log(keccak256(['bytes'], [`0x${bytecode.object}`]), 'init hash code');
