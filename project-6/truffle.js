const HDWalletProvider = require('truffle-hdwallet-provider');
const dotenv = require('dotenv');
dotenv.config();

const infuraKey = process.env.INFURA_KEY;
const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
    }
  }
};