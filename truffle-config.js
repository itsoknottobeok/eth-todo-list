module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Connect to Ganache
      port: 7545, // The port Ganache is running on
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}