"use server";

import { AccountType } from "@/hooks/useMetamask";
import { ethers } from "ethers";
import abi from "../../../contract_abi/abi.json";
import { Tasks } from "@/lib/types";

// TODO:
export const getAllTasksByUser = async (
  account: AccountType
): Promise<Array<Tasks>> => {
  const signer = await account?.provider?.getSigner();

  let contract: ethers.Contract;

  try {
    contract = new ethers.Contract(process.env.CONTRACT_ADDRESS!, abi, signer);
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
