const hre = require("hardhat");
const target = "";

async function main() {
  const Attack = await hre.ethers.getContractFactory("ElevatorAttack");
  const attack = await Attack.deploy();

  await attack.deployed();
  console.log("Attack deployed to:", attack.address);

  await attack.attack();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
