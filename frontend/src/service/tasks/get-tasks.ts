import { AccountType } from "@/hooks/useMetamask";
import { ethers } from "ethers";
import abi from "../../../contract_abi/abi.json";

// TODO:
export const getAllTasksByUser = async (account: AccountType) => {
  const signer = await account?.provider?.getSigner();

  let contract: ethers.Contract;

  try {
    contract = new ethers.Contract(
      "0xDB75aF00dd157fd0355B1404140CeFeF147Cf47A",
      abi,
      signer
    );
  } catch (e) {
    console.error(e);
    return [];
  }

  let tasks;

  try {
    tasks = await contract.getAllTasksByUser(account?.address);
  } catch (e) {
    console.error(e);
    return [];
  }

  return tasks;
};
