import web3 from './web3';

const address = '0x5402BDEA952e44c739be44FaeDB7A96E6e6FAa8d';
const abi = [
  {
    constant: false,
    inputs: [
      {
        name: '_decidedShare',
        type: 'uint256'
      },
      {
        name: '_processFee',
        type: 'uint8'
      }
    ],
    name: 'minimumShareButton',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'participants',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'returnAllParticipants',
    outputs: [
      {
        name: '',
        type: 'address[]'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
]; // THE ABI

const instance = new web3.eth.Contract(abi, address);

export default instance;