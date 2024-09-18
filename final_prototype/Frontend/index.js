const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
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
        "inputs": [],
        "name": "getTotalCandidates",
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

const ownerAddress = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';

let signer;
let contract;

// BASIC JAVASCRIPT RELATED TO PAGE

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

const addEventOnElements = function(elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
};

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

// header hiding

const header = document.querySelector("[data-header]");
const backTop = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function() {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", function() {
    if (window.scrollY >= 50) {
        header.classList.add("active");
        backTop.classList.add("active");
        hideHeader();
    } else {
        header.classList.remove("active");
        backTop.classList.remove("active");
    }
});

// HERO

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function() {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
};

const slideNext = function() {
    if (currentSlidePos >= heroSliderItems.length - 1) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    updateSliderPos();
};

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function() {
    if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length - 1;
    } else {
        currentSlidePos--;
    }

    updateSliderPos();
};

heroSliderPrevBtn.addEventListener("click", slidePrev);

// auto slide

let autoSlideInterval;

const autoSlide = function() {
    autoSlideInterval = setInterval(function() {
        slideNext();
    }, 7000);
};

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function() {
    clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function(event) {
    x = (event.clientX / window.innerWidth * 10) - 5;
    y = (event.clientY / window.innerHeight * 10) - 5;

    x = x - (x * 2);
    y = y - (y * 2);

    for (let i = 0, len = parallaxItems.length; i < len; i++) {
        x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
        y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
        parallaxItems[i].style.transform = `translate3d(${x}px,${y}px,0px)`;
    }
});

// Scroll to login section when "Login" button is clicked
document.getElementById('loginBtn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-section').scrollIntoView({ behavior: 'smooth' });
});

// Connect Wallet and Initialize Contract
async function initializeContract() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await provider.listAccounts();
            signer = provider.getSigner(accounts[0]);
            contract = new ethers.Contract(contractAddress, contractABI, signer);

            // Check contract initialization
            console.log("Contract initialized:", contract);

            // Load candidates
            loadCandidates();
        } catch (error) {
            console.error('Error connecting to MetaMask:', error);
        }
    } else {
        alert('MetaMask is not installed!');
    }
}

async function loadCandidates() {
    try {
        if (!contract) {
            console.error("Contract object is not defined.");
            return;
        }

        const totalCandidates = await contract.getTotalCandidates(); 
        console.log("Total Candidates:", totalCandidates);

        const candidatesTable = document.getElementById('candidatesTable').getElementsByTagName('tbody')[0];
        console.log("Candidates Table:", candidatesTable);

        for (let i = 0; i < totalCandidates; i++) {
            try {
                const candidate = await contract.listOfCandidates(i);
                console.log("Candidate:", candidate);

                const row = candidatesTable.insertRow();
                const idCell = row.insertCell(0);
                const nameCell = row.insertCell(1);
                const votesCell = row.insertCell(2);

                idCell.textContent = candidate.id;
                nameCell.textContent = candidate.name;
                votesCell.textContent = candidate.numberOfVotes;
            } catch (error) {
                console.error(`Error fetching candidate at index ${i}:`, error);
            }
        }
    } catch (error) {
        console.error("Error loading candidates:", error);
    }
}


document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const userAddress = document.getElementById('userAddress').value;

    if (typeof window.ethereum !== 'undefined') {
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });

            const accounts = await ethereum.request({ method: 'eth_accounts' });
            const matchingAccount = accounts.find(account => account.toLowerCase() === userAddress.toLowerCase());

            if (matchingAccount) {
                alert('Login successful with address: ' + matchingAccount);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send("eth_requestAccounts", []);
                const accounts = await provider.listAccounts();
                signer = provider.getSigner(accounts[0]);
                contract = new ethers.Contract(contractAddress, contractABI, signer);
            } else {
                alert('No matching MetaMask account found. Please switch to the correct account in MetaMask.');
            }
        } catch (error) {
            console.error('Error connecting to MetaMask:', error);
            alert('MetaMask connection failed!');
        }
    } else {
        alert('MetaMask is not installed!');
    }
});

//start election
const startElection = async function () {
  const duration1 = document.getElementById("duration").value;
  const candidates1 = document.getElementById("candidates").value.split(",");
  await contract.start(duration1, candidates1);
  alert("Election is ON");
};

document.querySelector("#startElection").addEventListener('click', startElection);

// Vote function
const sendvote = async function () {
    await contract.vote(document.getElementById("Vote").value);
    alert(`Vote has been given successfully`);
    location.reload();
    document.getElementById("Vote").value = "";
};

// Event Listener
document.querySelector('#voteButton').addEventListener('click', sendvote);


window.onload = initializeContract;








































































































// // 'use strict';

// const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
// const contractABI = [
//   {
//     "inputs": [],
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "_name",
//         "type": "string"
//       }
//     ],
//     "name": "addCandidates",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "checkElectionState",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "counting",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "uint256",
//             "name": "id",
//             "type": "uint256"
//           },
//           {
//             "internalType": "string",
//             "name": "name",
//             "type": "string"
//           },
//           {
//             "internalType": "uint256",
//             "name": "numberOfVotes",
//             "type": "uint256"
//           }
//         ],
//         "internalType": "struct TheContract.Candidate[]",
//         "name": "",
//         "type": "tuple[]"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "electionState",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "Id",
//         "type": "uint256"
//       }
//     ],
//     "name": "getVotes",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "listOfCandidates",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "id",
//         "type": "uint256"
//       },
//       {
//         "internalType": "string",
//         "name": "name",
//         "type": "string"
//       },
//       {
//         "internalType": "uint256",
//         "name": "numberOfVotes",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "listOfVoters",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "owner",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "resetVoters",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "timeDuration",
//         "type": "uint256"
//       },
//       {
//         "internalType": "string[]",
//         "name": "candiatesList",
//         "type": "string[]"
//       }
//     ],
//     "name": "start",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "timeLeft",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "id",
//         "type": "uint256"
//       }
//     ],
//     "name": "vote",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "voter",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "voterAddress",
//         "type": "address"
//       }
//     ],
//     "name": "voterStatus",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "votingEnd",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "votingStart",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ];  
// const ownerAddress = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';

// let signer;
// let contract;


// // BASIC JAVASCRIPT RELATED TO PAGE

// const preloader = document.querySelector("[data-preload]");

// window.addEventListener("load", function(){
//     preloader.classList.add("loaded");
//     document.body.classList.add("loaded");
// });

// const addEventOnElements = function(elements, eventType, callback) {
//   for(let i=0, len = elements.length;i<len;i++){
//       elements[i].addEventListener(eventType,callback);
//   }
// }

// const navbar = document.querySelector("[data-navbar]");
// const navTogglers = document.querySelectorAll("[data-nav-toggler]");
// const overlay = document.querySelector("[data-overlay]");

// const toggleNavbar = function(){
//   navbar.classList.toggle("active");
//   overlay.classList.toggle("active");
//   document.body.classList.toggle("nav-active");
// }

// addEventOnElements(navTogglers,"click",toggleNavbar);



// // header hiding

// const header = document.querySelector("[data-header]");
// const backTop = document.querySelector("[data-back-top-btn]");


// let lastScrollPos = 0;

// const hideHeader = function(){
//     const isScrollBottom = lastScrollPos < window.scrollY;
//     if(isScrollBottom){
//         header.classList.add("hide");
//     }else{
//         header.classList.remove("hide");
//     }

//     lastScrollPos = window.scrollY;
// }

// window.addEventListener("scroll", function(){
//     if(window.scrollY >= 50){
//         header.classList.add("active");
//         backTop.classList.add("active");
//         hideHeader();
//     }else {
//         header.classList.remove("active");
//         backTop.classList.remove("active");
//     }
// })


// // HERO

// const heroSlider = document.querySelector("[data-hero-slider]");

// const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");

// const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");

// const heroSliderNextBtn = document.querySelector("[data-next-btn]");

// let currentSlidePos = 0;
// let lastActiveSliderItem = heroSliderItems[0]

// const updateSliderPos = function(){
//     lastActiveSliderItem.classList.remove("active");
//     heroSliderItems[currentSlidePos].classList.add("active");
//     lastActiveSliderItem = heroSliderItems[currentSlidePos];
// }

// const slideNext = function(){
//     if(currentSlidePos>=heroSliderItems.length-1){
//         currentSlidePos = 0;
//     } else {
//         currentSlidePos++;
//     }

//     updateSliderPos();
// }

// heroSliderNextBtn.addEventListener("click",slideNext);

// const slidePrev = function(){
//     if(currentSlidePos<=0){
//         currentSlidePos = heroSliderItems.length-1;
//     } else {
//         currentSlidePos--;
//     }

//     updateSliderPos();
// }

// heroSliderPrevBtn.addEventListener("click",slidePrev);

// // auto slide

// let autoSlideInterval;

// const autoSlide = function(){
//     autoSlideInterval = setInterval(function(){
//         slideNext();
//     },7000);
// }

// addEventOnElements([heroSliderNextBtn,heroSliderPrevBtn],"mouseover",function(){
//     clearInterval(autoSlideInterval);
// })

// addEventOnElements([heroSliderNextBtn,heroSliderPrevBtn],"mouseout",autoSlide);

// window.addEventListener("load",autoSlide);

// const parallaxItems = document.querySelectorAll("[data-parallax-item]");

// let x,y;

// window.addEventListener("mousemove",function(event){
    
//     x = (event.clientX / window.innerWidth * 10) - 5;
//     y = (event.clientY / window.innerHeight * 10) - 5;

//     x = x - (x*2);
//     y = y - (y*2);

//     for(let i =0, len = parallaxItems.length;i<len;i++){
//         x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
//         y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
//         parallaxItems[i].style.transform = `translate3d(${x}px,${y}px,0px)`;
//     }

// });

// // Scroll to login section when "Login" button is clicked
// document.getElementById('loginBtn').addEventListener('click', function(e) {
//   e.preventDefault();
//   document.getElementById('login-section').scrollIntoView({ behavior: 'smooth' });
// });

// // document.getElementById('loginForm').addEventListener('submit', async function(e) {
// //   e.preventDefault();
// //   const userAddress = document.getElementById('userAddress').value;
  
// //   
// //   if (typeof window.ethereum !== 'undefined') {
// //       try {
// //
// //           await ethereum.request({ method: 'eth_requestAccounts' });

// //           const accounts = await ethereum.request({ method: 'eth_accounts' });
          
// //           
// //           if (accounts[0].toLowerCase() === userAddress.toLowerCase()) {
// //               alert('Login successful!');
// //           } else {
// //               alert('Address does not match MetaMask account!');
// //           }
// //       } catch (error) {
// //           console.error('Error connecting to MetaMask:', error);
// //           alert('MetaMask connection failed!');
// //       }
// //   } else {
// //       alert('MetaMask is not installed!');
// //   }
// // });

// document.getElementById('loginForm').addEventListener('submit', async function(e) {
//   e.preventDefault();
//   const userAddress = document.getElementById('userAddress').value;

//   if (typeof window.ethereum !== 'undefined') {
//       try {
//           await ethereum.request({ method: 'eth_requestAccounts' });

//           const accounts = await ethereum.request({ method: 'eth_accounts' });
          
//           const matchingAccount = accounts.find(account => account.toLowerCase() === userAddress.toLowerCase());

//           if (matchingAccount) {
//               alert('Login successful with address: ' + matchingAccount);
//               const provider = new ethers.providers.Web3Provider(window.ethereum);
//               await provider.send("eth_requestAccounts", []);
//               const accounts = await provider.listAccounts();
//               signer = provider.getSigner(accounts[0]);
//               contract = new ethers.Contract(contractAddress, contractABI, signer);
//           } else {
//               alert('No matching MetaMask account found. Please switch to the correct account in MetaMask.');
//           }
//       } catch (error) {
//           console.error('Error connecting to MetaMask:', error);
//           alert('MetaMask connection failed!');
//       }
//     } else {
//       alert('MetaMask is not installed!');
//   }
// });

// async function loadCandidates() {
//   try {
//       const totalCandidates = await contract.methods.listOfCandidatesLength().call();
//       console.log("Total Candidates:", totalCandidates); // Debugging

//       const candidatesTable = document.getElementById('candidatesTable').getElementsByTagName('tbody')[0];
//       console.log("Candidates Table:", candidatesTable); // Debugging

//       for (let i = 0; i < totalCandidates; i++) {
//           try {
//               const candidate = await contract.methods.listOfCandidates(i).call(); // Fetch candidate by index
//               console.log("Candidate:", candidate); // Debugging

//               // Create a new row for the table
//               const row = candidatesTable.insertRow();

//               // Insert cells for Candidate ID, Name, and Votes
//               const idCell = row.insertCell(0);
//               const nameCell = row.insertCell(1);
//               const votesCell = row.insertCell(2);

//               // Fill the cells with data from contract
//               idCell.textContent = candidate.id;
//               nameCell.textContent = candidate.name;
//               votesCell.textContent = candidate.numberOfVotes;
//           } catch (error) {
//               console.error(`Error fetching candidate at index ${i}:`, error);
//           }
//       }
//   } catch (error) {
//       console.error("Error loading candidates:", error);
//   }
// }

// window.onload = loadCandidates;



























// if (window.ethereum) {
//   const provider = new ethers.providers.Web3Provider(window.ethereum);

//   async function connectWallet() {
//       try {
//           await provider.send("eth_requestAccounts", []);
//           const accounts = await provider.listAccounts();
//           signer = provider.getSigner(accounts[0]);
//           contract = new ethers.Contract(contractAddress, contractABI, signer);

//           const inputAddress = document.getElementById("address").value.toLowerCase();

//           // Check if the input address matches the owner's address
//           if (inputAddress === ownerAddress.toLowerCase()) {
//               document.getElementById("status").textContent = "Welcome, Owner!";
//               window.alert("Welcome Sir");
//               window.location.href = "./owner.html";
//           } else {
//               // Check if the input address is a registered voter
//               const isVoter = await contract.voter(inputAddress);
//               if (isVoter) {
//                   document.getElementById("message").textContent = "Welcome, Voter!";
//                   window.location.href = "/voter-platform.html";
//               } else {
//                   document.getElementById("message").textContent = "You are not registered.";
//               }
//           }
//       } catch (error) {
//           console.error("Error connecting to MetaMask:", error);
//           document.getElementById("message").textContent = "Failed to connect wallet.";
//       }
//   }

//   // Add event listener to the connect wallet button
//   document.querySelector('#connectWallet').addEventListener('click', connectWallet);

// } else {
//   alert("Please install MetaMask!");
// }

