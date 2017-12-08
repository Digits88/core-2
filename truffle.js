const HDWalletProvider = require("truffle-hdwallet-provider")
const mnemonic = "word word word" //MNEMONIC
const host = "http://localhost:8545"//NODE

module.exports = {
  networks: {
    ganache: {
      host: "truffle",
      port: 8545,
      network_id: "*" // Match any network id
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(mnemonic, host)
      },
      gas: 127000,
      network_id: "42"
    }
  },
}