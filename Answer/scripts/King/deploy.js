const hre = require("hardhat");
const target = "0xE666877C22caae1248688A05Fa6385FC0B082178";

async function main() {
  const Attack = await hre.ethers.getContractFactory("KingAttack");
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
