require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "9994f45ac06f5db403d9871c70hshsfuckahhshshsjsjusshshhsk";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
