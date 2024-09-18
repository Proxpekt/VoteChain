const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';  
const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addCandidates",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "checkElectionState",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "electionState",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCandidates",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "numberOfVotes",
              "type": "uint256"
            }
          ],
          "internalType": "struct TheContract.Candidate[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "Id",
          "type": "uint256"
        }
      ],
      "name": "getVotes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "listOfCandidates",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "numberOfVotes",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "listOfVoters",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "resetVoters",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "state",
          "type": "bool"
        }
      ],
      "name": "setElectionState",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "timeDuration",
          "type": "uint256"
        },
        {
          "internalType": "string[]",
          "name": "candiatesList",
          "type": "string[]"
        }
      ],
      "name": "start",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "timeLeft",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "voter",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "voterAddress",
          "type": "address"
        }
      ],
      "name": "voterStatus",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votingEnd",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votingStart",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
];  

let signer;
let contract;

// window.ethereum to interact with MetaMask
if (window.ethereum) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

//   async function getAccount() {
//     try {
//       // Request account access from MetaMask
      await provider.send("eth_requestAccounts", []);
      const accounts = await provider.listAccounts();
      signer = provider.getSigner(accounts[0]);
//       
//       alert("Wallet connected!");
//       document.querySelector('#ConnectWallet').disabled = true;
//     } catch (error) {
//       console.error("User denied wallet connection:", error);
//       alert("Please connect your wallet to proceed.");
//     }
//   }

//   document.querySelector('#ConnectWallet').addEventListener('click', getAccount);
contract = new ethers.Contract(contractAddress, contractABI, signer);
  // Election start function
  const startElection = async function () {
    const duration1 = document.getElementById("duration").value;
    const candidates1 = document.getElementById("candidates").value.split(",");
    await contract.start(duration1, candidates1);
    alert("Election is ON baby");
  };

  // Vote function
  const sendvote = async function () {
    await contract.vote(document.getElementById("Vote").value);
    alert(`Vote has been given successfully`);
    document.getElementById("Vote").value = "";
  };

  // Attach event listeners
  document.querySelector("#startElection").addEventListener('click', startElection);
  document.querySelector('#voteButton').addEventListener('click', sendvote);

} else {
  alert("Please install MetaMask!");
}


































// let signer;
// let contract;

// const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

// provider.send("eth_requestAccounts", []).then(() => {
//   provider.listAccounts().then((accounts) => {
//     signer = provider.getSigner(accounts[0]);
//     contract = new ethers.Contract(contractAddress, contractABI, signer);
//   })
// })

// // async function connectWallet() {
// //   if (window.ethereum) {
// //       try {
// //           await window.ethereum.request({ method: 'eth_requestAccounts' });
// //           alert("Wallet connected!");
// //       } catch (error) {
// //           console.error("User denied wallet connection:", error);
// //           alert("Please connect your wallet to proceed.");
// //       }
// //   } else {
// //       alert("Please install MetaMask!");
// //   }
// // }

// const sendvote = async function () {
//   await contract.vote(document.getElementById("Vote").value);
//   alert(`Vote has been given successfully`);
//   document.getElementById("Vote").value = "";
// }

// const startElection = async function () {
//   const duration1 = document.getElementById("duration").value;
//   const candidates1 = document.getElementById("candidates").value.split(",");
//   await contract.start(duration1,candidates1);
//   alert("Election is ON baby");
// }

// const connectWalletBtn = document.querySelector('#ConnectWallet');
// const getAccount = async function () {
//   const ethAccounts = await provider.send("eth_requestAccounts", []).then(() =>{
//     provider.listAccounts().then((accounts) => {
//     signer = provider.getSigner(accounts[0]);
//     contract = new ethers.Contract(contractAddress, contractABI, signer);
//     })
//   })
//   connectWalletBtn.disabled = true;
// }

// // async function startElection() {
// //   const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
// //   const signer = provider.getSigner();
// //   const votingContract = new ethers.Contract(contractAddress, contractABI, signer);
// //   const candidatesInput = document.getElementById('candidates').value;
// //   const duration = document.getElementById('duration').value;
  
// //   try {
// //     const candidates = candidatesInput.split(',').map(c => c.trim());
// //     await votingContract.start(duration, candidates);
// //     alert("Election started successfully!");
// //   } catch (error) {
// //     console.error("Error starting election:", error);
// //     alert("Failed to start the election.");
// //   }
// // }

// // async function vote() {
// //   const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
// //   const signer = provider.getSigner();
// //   const votingContract = new ethers.Contract(contractAddress, contractABI, signer);
// //   const candidate = document.getElementById('candidate').value;
  
// //   try {
// //     await votingContract.vote(candidate);
// //     alert(`You have successfully voted for ${candidate}!`);
// //   } catch (error) {
// //     console.error("Error voting:", error);
// //     alert("Failed to vote.");
// //   }
// // }

// connectWalletBtn.addEventListener('click', getAccount);

// const stratElectionBtn = document.querySelector("#startElection");
// stratElectionBtn.addEventListener('click', startElection);

// const voteBtn = document.querySelector('#voteButton');
// voteBtn.addEventListener('click', sendvote);


// // window.onload = connectWallet;