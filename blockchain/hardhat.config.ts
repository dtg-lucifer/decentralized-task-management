import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    localganache: {
      url: process.env.PROVIDER_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY!],
      chainId: 1337,
    },
  },
};

export default config;
