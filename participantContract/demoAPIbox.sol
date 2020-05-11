pragma solidity >=0.4.21 <0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract DemoAPIbox {
    address public owner;
    mapping(address => uint)balances;

    constructor() public {
        owner = msg.sender;
        balances[owner] = 10000;
    }
    event ParticipantTransaction ( //this is something we emit to blockchain
        address owner, //this one is corresponding to msg.sender
        string offeringGuy, //corresponding parameter should be set up in demoAPIbox as interface
        uint128 phone,
        string email
        //I turn off below temporary, for saving gas
        /*
        uint8 currency,
        uint16 amountMoney,
        string itemChoose,
        string artistChoose,
        uint168 transactionDate,
        string description
        */
    );

    function transactionButton ( //this function should be triggered by button transaction set in "BlockchainHere.vue"
        string memory offeringGuy, //corresponding parameter should be set up in demoAPIbox as interface
        uint128 phone,
        string memory email
        /*
        uint8 currency,
        uint16 amountMoney,
        string memory itemChoose,
        string memory artistChoose,
        uint168 transactionDate,
        string memory description
        */
    ) public {
        if (msg.sender != owner) return;
        emit ParticipantTransaction(
            msg.sender, 
            offeringGuy, 
            phone,
            email
            /*
            currency,
            amountMoney,
            itemChoose,
            artistChoose,
            transactionDate,
            description
            */
        );
    }
}



/*
contract Ownable {
    address owner;
    function Ownable() public {owner = msg.sender;}
    modifier Owned {
        require(msg.sender == owner);
        _;
    }
}

contract DemoAPIbox {

    Participant[] public participants; 

    //this event is triggered by function transactionButton
    event ParticipantTransaction ( //this is something we emit to blockchain
        address owner, //this one is corresponding to msg.sender
        string offeringGuy, //corresponding parameter should be set up in demoAPIbox as interface
        uint128 phone,
        string email,
        uint8 currency,
        uint16 amountMoney,
        string itemChoose,
        string artistChoose,
        uint168 transactionDate,
        string description
    );

    function transactionButton ( //this function should be triggered by button transaction set in "BlockchainHere.vue"
        string memory offeringGuy, //corresponding parameter should be set up in demoAPIbox as interface
        uint128 phone,
        string memory email,
        uint8 currency,
        uint16 amountMoney,
        string memory itemChoose,
        string memory artistChoose,
        uint168 transactionDate,
        string memory description
    ) public {
        require(amountMoney > 0);
        // set the new 
        Participant newParticipant = new Participant(
            msg.sender, 
            offeringGuy, 
            phone,
            email,
            currency,
            amountMoney,
            itemChoose,
            artistChoose,
            transactionDate,
            description
            );
        push the participant address to participants array
        participants.push(newParticipant);
        emit ParticipantTransaction(
            msg.sender, 
            offeringGuy, 
            phone,
            email,
            currency,
            amountMoney,
            itemChoose,
            artistChoose,
            transactionDate,
            description
        );
    }
}


contract Participant {
    using SafeMath for uint256;

    address payable private owner;
    string public  offeringGuy;
    uint128 public phone;
    string public  email;
    uint8 public currency;
    uint16 public amountMoney;
    string public itemChoose;
    string public artistChoose;
    uint168 public transactionDate;
    string public description;

    constructor(
        address payable creator,
        ) public {
        // initialize
        owner = creator;
    }
    
    modifier notOwner(){
        require(msg.sender != owner);
        _;
    }

    
}
*/
