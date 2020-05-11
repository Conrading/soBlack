import web3 from './web3';

const address = '0x5402BDEA952e44c739be44FaeDB7A96E6e6FAa8d';
const abi = [
    {
        anonymous: false,
        inputs: [
            {
                name: "owner",
                type: "address"
            },
            {
                name: "offeringGuy",
                type: "string"
            },
            {
                name: "phone",
                type: "uint128"
            },
            {
                name: "email",
                type: "string"
            },
            {
                name: "currency",
                type: "uint8"
            },
            {
                name: "amountMoney",
                type: "uint16"
            },
            {
                name: 'itemChoose',
                type: 'string'
            },
            {
                name: 'artistChoose',
                type: 'string'
            },
            {
                name: 'transactionDate',
                type: 'uint168'
            },
            {
                name: 'description',
                type: 'string'
            },
        ],
        name: "ParticipantTransaction",  //this is for emit event in smart contract
        type: "event"
    },
  {
    constant: false,
    inputs: [
      {
        name: 'offeringGuy',
        type: 'string'
      },
      {
        name: 'phone',
        type: 'uint128'
      },
      {
        name: 'email',
        type: 'string'
      },
      {
        name: 'currency',
        type: 'uint8'
      },
      {
        name: 'amountMoney',
        type: 'uint16'
      },
      {
        name: 'itemChoose',
        type: 'string'
      },
      {
        name: 'artistChoose',
        type: 'string'
      },
      {
        name: 'transactionDate',
        type: 'uint168'
      },
      {
        name: 'description',
        type: 'string'
      },
    ],
    name: 'transactionButton',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }
]; // THE ABI

const instance = new web3.eth.Contract(abi, address);

export default instance;