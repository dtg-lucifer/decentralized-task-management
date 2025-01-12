"use client";

import { WalletIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useSDK } from "@metamask/sdk-react";
import { formatAddress } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  return (
    <div className="relative">
      {connected ? (
        <Popover>
          <PopoverTrigger>
            <Button>{formatAddress(account)}</Button>
          </PopoverTrigger>
          <PopoverContent className="top-10 right-0 z-10 bg-gray-100 shadow-lg mt-2 border rounded-md w-44">
            <button
              onClick={disconnect}
              className="block hover:bg-gray-200 py-2 pr-4 pl-2 w-full text-[#F05252] text-left"
            >
              Disconnect
            </button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button disabled={connecting} onClick={connect}>
          <WalletIcon className="mr-2 w-4 h-4" /> Connect Wallet
        </Button>
      )}
    </div>
  );
};
