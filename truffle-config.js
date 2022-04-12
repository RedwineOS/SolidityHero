const HDWalletProvider = require('@truffle/hdwallet-provider')

require('dotenv').config() 

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.NODE_URL),
      // Chosen node provider triggered timeouts with the default value.
      networkCheckTimeout: 200000,
      network_id: 3,       // Ropsten's id
      gas: 550000,        // Ropsten has a lower block limit than mainnet
      confirmations: 0,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 2000000,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: false     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
      version: "0.8.1",   
    }
  },

};