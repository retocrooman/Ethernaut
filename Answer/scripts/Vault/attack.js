const Web3 = require("web3");
const web3 = new Web3();
require('dotenv').config();

const target = "0xB368b00dBD72138Bd047c90Cd81FC3870c73eE74";

async function main() {
  web3.setProvider(new web3.providers.HttpProvider(process.env.INFRA));
  const password = await web3.eth.getStorageAt(
      target,
      1
  )
  console.log(password);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });