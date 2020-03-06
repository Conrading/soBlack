pragma solidity >=0.4.21 <0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";


contract ParticipantBox{
    Participant[] public participants; 
   
    function minimumShareButton (
        //string memory videoID,
        uint256 decidedShare,
        uint8 processFee
        ) public{
        require(processFee > 0);
        // set the new 
        Participant newParticipant = new Participant(msg.sender, decidedShare, processFee);
        // push the participant address to participants array
        participants.push(newParticipant);
        returnAllParticipants();
    }
    /*
    function minimumShareRight (
        string memory videoID,
        uint256 decidedShare,
        uint8 processFee
        ) public{
        require(processFee > 0);
        // set the new 
        Participant newParticipant = new Participant(msg.sender, videoID, decidedShare, processFee);
        // push the participant address to participants array
        participants.push(newParticipant);
        returnAllParticipants();
    }
    */
    function returnAllParticipants() public view returns(Participant[] memory){
        return participants;
    }
}

contract Participant {
    using SafeMath for uint256;

    enum State {Average, Random, Both}

    address payable private owner;
    //string public videoID;
    uint256 public decidedShare;
    uint8 public processFee;
    string public inputName;
    string public description;
    State public state = State.Both;

    event FinalAverageAgreement(address owner, uint256 decidedShare, string inputName, string description, uint256 resultAverageShare);
    event FinalRandomAgreement(address owner, uint256 decidedShare, string inputName, string description);

    modifier inState(State _state) {
        require(state == _state);
        _;
    }

    constructor(
        address payable creator,
        //string memory uploadVideoID,
        uint256 uploadDecidedShare,
        uint8 Fee
        ) public {
        // initialize
        owner = creator;
        //videoID = uploadVideoID;
        decidedShare = uploadDecidedShare;
        processFee = Fee;
    }
    
    modifier notOwner(){
        require(msg.sender != owner);
        _;
    }

    function averageShareCalculation(uint256 resultAverageShare, string memory inputName, string memory description) public 
    inState(State.Average) returns (bool) {
            emit FinalAverageAgreement(msg.sender, decidedShare, inputName, description, resultAverageShare);
            return true;
    }

    function randomShareCalculation(string memory inputName, string memory description) public  
    inState(State.Random) returns (bool) {
            emit FinalRandomAgreement(msg.sender, decidedShare, inputName, description);
            return true;
    }

    function returnContents() public view returns(        
        string memory,
        string memory,
        uint256
        ) {
        return (
            inputName,
            description,
            decidedShare
        );
    }
}