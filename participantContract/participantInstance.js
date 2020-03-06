import web3 from './web3';

const address = '0x5402BDEA952e44c739be44FaeDB7A96E6e6FAa8d';
const abi = [
  {
    constant: true,
    inputs: [],
    name: 'returnContents',
    outputs: [
      {
        name: 'inputName',
        type: 'string'
      },
      {
        name: 'description',
        type: 'string'
      },
      {
        name: 'decidedShare',
        type: 'uint256'
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'resultAverageShare',
        type: 'uint256'
      },
      {
        name: 'inputName',
        type: 'string'
      },
      {
        name: 'description',
        type: 'string'
      }
    ],
    name: "averageShareCalculation",
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
        {
            name: "owner",
            type: "address"
        },
        {
            name: "decidedShare",
            type: "uint256"
        },
        {
            name: "inputName",
            type: "string"
        },
        {
            name: "description",
            type: "string"
        },
        {
            name: "resultAverageShare",
            type: "uint256"
        }
    ],
    name: "FinalAverageAgreement",
    outputs: [],
    type: "event"
  },
  {
    constant: false,
    inputs: [
      {
        name: 'resultAverageShare',
        type: 'uint256'
      },
      {
        name: 'inputName',
        type: 'string'
      },
      {
        name: 'description',
        type: 'string'
      }
    ],
    name: "randomShareCalculation",
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
        {
            name: "owner",
            type: "address"
        },
        {
            name: "decidedShare",
            type: "uint256"
        },
        {
            name: "inputName",
            type: "string"
        },
        {
            name: "description",
            type: "string"
        }
    ],
    name: "FinalRandomAgreement",
    outputs: [],
    type: "event"
  },
  {
    inputs: [
      {
        name: 'creator',
        type: 'address'
      },
      {
        name: 'uploadVideoID',
        type: 'string'
      },
      {
        name: 'uploadDecidedShare',
        type: 'uint256'
      },
      {
        name: 'Fee',
        type: 'uint8'
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  }
]; 


const instance = new web3.eth.Contract(abi, address);

export default instance;

/*export default address => {
  const instance = new web3.eth.Contract(abi, address);
  return instance;
};
*/