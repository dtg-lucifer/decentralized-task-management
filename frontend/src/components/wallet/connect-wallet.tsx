"use client";

import { WalletIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { formatAddress } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { useMetamask } from "@/hooks/useMetamask";
import { WalletAvatar } from "./wallet-avatar";

export const ConnectWalletButton = () => {
  const { connect, connected, disconnect, loading, account } = useMetamask();

  // TODO: make it look more cleaner
  // TODO: improve the functionalities, i.e. add more options apart from just disconnecting, such as viewing the wallet address, etc.

  return (
    <div className="relative">
      {connected ? (
        <Popover>
          <PopoverTrigger
            asChild
            className="flex justify-center items-center gap-2 bg-foreground px-2 rounded-md max-w-fit cursor-pointer"
          >
            <div>
              <WalletAvatar address={account!.address!} size={25} />
              <Button
                variant={"ghost"}
                className="bg-foreground hover:bg-transparent text-background hover:text-none"
              >
                {formatAddress(account?.address)}
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent className="top-10 right-0 z-10 shadow-lg mt-2 p-0 border rounded-md max-w-fit overflow-hidden">
            <span
              onClick={disconnect}
              className="block bg-[#F05252] py-1 p-2 w-full text-left text-white cursor-pointer"
            >
              Disconnect
            </span>
          </PopoverContent>
        </Popover>
      ) : (
        <Button disabled={loading} onClick={connect}>
          <WalletIcon className="mr-2 w-4 h-4" />{" "}
          {loading ? "Loading..." : "Connect Wallet"}
        </Button>
      )}
    </div>
  );
};