const hre = require("hardhat");

async function main() {
    const Voting = await hre.ethers.getContractFactory("TheContract");
    const voting = await Voting.deploy();

    // Wait for the deployment to be mined
    await voting.waitForDeployment(); // <-- Add parentheses to call the method

    console.log("Voting contract deployed to:", voting.target);

    // Optionally reset election state if your contract has this function
    await voting.setElectionState(false); // <-- Use `voting` instead of `contract`
    console.log("Election state reset to false.");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
