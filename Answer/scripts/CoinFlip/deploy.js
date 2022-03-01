const hre = require("hardhat");
const target = "0xC570Ee1A16a0A16A8a3F6E4371e18d2D8198c724";

async function main() {
  const Attack = await hre.ethers.getContractFactory("CoinFlipAttack");
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
