const hre = require("hardhat");
const target = "0x4A20d4Daea63a829A1c0c44e0bb8909c394691b8";

async function main() {
  const Attack = await hre.ethers.getContractFactory("ForceAttack");
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
