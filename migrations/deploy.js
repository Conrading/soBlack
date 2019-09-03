const Provider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("../build/contracts/Math.json");

const provider = new Provider(
  "first time test",
  "https://ropsten.infura.io/v3/939b853c839c41299a21377f77b8e9da"
);

const web3 = new Web3(provider);
const INITIAL_SUPPLY = 1000;

(async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Deploying from account:", accounts[0]);

  const contract = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: "0x" + bytecode,
      arguments: [INITIAL_SUPPLY]
    })
    .send({ from: accounts[0], gas: 1000000 });
  console.log("Contract address:", contract.options.address);
})();