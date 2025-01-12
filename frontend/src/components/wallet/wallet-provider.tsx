"use client";

import { MetaMaskProvider } from "@/hooks/useMetamask";
import { PropsWithChildren } from "react";

export const MetaMaskProviderWrapper = ({ children }: PropsWithChildren) => {
  return <MetaMaskProvider>{children}</MetaMaskProvider>;
};
