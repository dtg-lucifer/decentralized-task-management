import { ThemeToggle } from "@/components/theme/theme-switcher";
import { ConnectWalletButton } from "@/components/wallet/connect-wallet";

export default function Home() {
  return (
    <h1>
      Hello world
      <ThemeToggle />
      <ConnectWalletButton />
    </h1>
  );
}
