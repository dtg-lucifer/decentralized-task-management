import { ethers } from "ethers";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

export interface AccountType {
  address?: string;
  balance?: string;
  chainId?: string;
  network?: string;
  provider?: ethers.BrowserProvider;
}

export interface MetaMaskContextType {
  connect: () => Promise<void>;
  disconnect: () => void;
  account: AccountType | null;
  error: string | null;
  loading: boolean;
  connected: boolean;
}

const MetaMaskContext = createContext<MetaMaskContextType | undefined>(
  undefined
);

export const MetaMaskProvider = ({ children }: PropsWithChildren) => {
  const [account, setAccount] = useState<AccountType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);

  const connect = useCallback(async () => {
    const eth = window.ethereum;

    if (!eth) {
      setError("MetaMask not found");
      setConnected(false);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const accounts = await eth.request({ method: "eth_requestAccounts" });
      const address = accounts[0];

      const provider = new ethers.BrowserProvider(eth);
      const balance = await provider.getBalance(address);
      const network = await provider.getNetwork();

      setAccount({
        address,
        provider,
        balance: ethers.formatEther(balance),
        chainId: network.chainId.toString(),
        network: network.name,
      });

      setConnected(true);
      setError(null);
    } catch (err) {
      setError((err as Error)?.message ?? "Failed to connect");
      setConnected(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    window.ethereum?.removeAllListeners();
    setAccount(null);
    setConnected(false);
    setLoading(false);
  }, []);

  return (
    <MetaMaskContext.Provider
      value={{ connect, disconnect, account, error, loading, connected }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};

export const useMetamask = (): MetaMaskContextType => {
  const context = useContext(MetaMaskContext);

  if (!context) {
    throw new Error("useMetamask must be used within a MetaMaskProvider");
  }

  return context;
};
