import { createConfig } from "ponder";
import { http } from "viem";
import { erc721ABI } from "./abis/erc721ABI";

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    ERC721: {
      network: "mainnet",
      abi: erc721ABI,
      address: "0x7aB2F10CaC6E27971fa93A5D5470Bb84126Bb734",
      startBlock: 19337083,
    },
  },
});
