import { ThemeToggle } from "@/components/theme/theme-switcher";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <h1>
      Hello world<Button>Hello</Button>
      <ThemeToggle />
    </h1>
  );
}
