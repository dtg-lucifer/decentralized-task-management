import { SearchIcon } from "lucide-react";
import { ThemeToggle } from "../theme/theme-switcher";
import { Input } from "../ui/input";
import { ConnectWalletButton } from "../wallet/connect-wallet";

// FIXME: make the search bar working
// TODO: add quick links
// TODO: add a logo
// FIXME: make the navbar responsive

export const Navbar = () => {
  return (
    <nav className="top-0 z-10 sticky flex justify-between items-center gap-4 backdrop-blur-md p-4">
      <h1
        style={{
          fontFamily: "accent_font",
        }}
        className="font-bold text-3xl dark:text-[hsl(244,100%,90%)]"
      >
        Detaskify
      </h1>
      {/* quick links */}
      <div className="flex justify-around items-center border-gray-700 px-2 p-1 border rounded-full w-[20rem] focus-within:w-3/12 transition-all duration-500 group">
        <Input
          type="text"
          className="flex-grow border-none focus-visible:ring-0 transition-all duration-500"
          placeholder="Search for projects..."
        />
        <SearchIcon className="transition-all" />
      </div>

      <div className="flex space-x-4">
        <ThemeToggle />
        <ConnectWalletButton />
      </div>
    </nav>
  );
};
