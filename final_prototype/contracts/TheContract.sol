// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.24;

// import "@openzeppelin/contracts/utils/Counters.sol"; //tracking purpose
// import "hardhat/Console.sol"; //log me dekhna sab kese kya ho rha hai

contract TheContract {

    //GOD
    address public owner; 

    // The main two people
    struct Candidate {
        uint256 id;
        string name;
        uint256 numberOfVotes;
    }

    // struct Voter {
    //     uint256 id;
    // }
    mapping(address => bool) public voter;

    // The lists
    Candidate[] public listOfCandidates;
    address[] public listOfVoters;

    // Timings Constraints
    uint256 public votingStart;
    uint256 public votingEnd;
    bool public electionState; //Is election going on or not

    //Modifer
    modifier ownerPreviliges() { //someone tries to authorize aur change votes or anything he is getting fuked
        require(msg.sender == owner, "Unauthorised, I will kill you");
        _;
    }

    modifier electionON() { //to stop voting before the voting begins
        require(electionState, "Bruh what are u doing, get a life");
        _;
    }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // The one who initilizes the contract on the blockchain becomes the OWNER... BJP for the W
    constructor(){
        owner = msg.sender;
    }

//  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function timeLeft() public view electionON returns(uint) { //time left to vote
        if(block.timestamp >= votingEnd){
            return 0;
        }
        return (votingEnd - block.timestamp);
    }    

    function checkElectionState() public returns (bool){
        if(timeLeft()>0){
            return true;
        }
        electionState = false;
        return false;
    }

    function resetVoters() public ownerPreviliges {
        for (uint256 i = 0; i < listOfVoters.length; i++) {
            voter[listOfVoters[i]] = false;
        }
        delete listOfVoters;
    }
//  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Start the election bruh
    function start(uint256 timeDuration, string[] memory candiatesList) public ownerPreviliges{
        require(!electionState, "Bhai kya kar rha hai tu"); //only works if election is not running

        electionState = true;

        delete listOfCandidates; //ho sakta hai phele bhi election hoye ho isliye nayi shuruwat me delete
        resetVoters();                        //some function to reset the list of voters LAMO AALSI KAAM KARLE DALLE

        for (uint256 i = 0; i < candiatesList.length; i++) { //nai list formation
            listOfCandidates.push(
                Candidate({id:(i+1), name:candiatesList[i], numberOfVotes: 0})
            );
        }

        votingStart = block.timestamp; //self explainitry
        votingEnd = block.timestamp + (timeDuration * 1 minutes);
    }

    // Adding the candidates after the election has begun AALSI
    function addCandidates(string memory _name) public ownerPreviliges {
        require(checkElectionState(), "akal ke dushman");
        listOfCandidates.push(
            Candidate({id:(listOfCandidates.length+1), name: _name, numberOfVotes:0})
        );
    }

    // Checking the voter status
    function voterStatus(address voterAddress) view public returns (bool) {
        return voter[voterAddress];
    }

    function vote(uint256 id) public electionON{
        require(checkElectionState(), "akal ke dushman");
        require(!voterStatus(msg.sender), "kitni baar dalega bhaii");

        require(id > 0 && id <= listOfCandidates.length, "Rahul Gandhi ko dal rha bhruv");
        listOfCandidates[id-1].numberOfVotes++;

        voter[msg.sender] = true;
        listOfVoters.push(msg.sender);
    }

    function getVotes(uint256 Id) public view returns (uint256) {
        require(Id > 0 && Id <= listOfCandidates.length, "Ullu ke patthe");

        return listOfCandidates[Id - 1].numberOfVotes; 
    }

    function getCandidates() public view returns(Candidate[] memory) {
        return listOfCandidates;
    }

    function setElectionState(bool state) public ownerPreviliges {
        electionState = state;
    }

    function getTotalCandidates() public view returns (uint256) {
        return listOfCandidates.length;
    }

}
