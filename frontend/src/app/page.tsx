import { ThemeToggle } from "@/components/theme/theme-switcher";
import { Button } from "@/components/ui/button";
import { ConnectWalletButton } from "@/components/wallet/connect-wallet";

export default function Home() {
  return (
    <h1>
      Hello world<Button>Hello</Button>
      <ThemeToggle />
      <ConnectWalletButton />
    </h1>
  );
}
