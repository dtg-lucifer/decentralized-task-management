import AvaialbleProjects from "@/components/dashboard/available-projects";
import HeroHeader from "@/components/dashboard/hero-section";
import RecentProjects from "@/components/dashboard/recent-projects";

export default function Home() {

  return (
    <main className="bg-background dark:bg-[#252525] min-w-full min-h-screen">
      <HeroHeader />
      <RecentProjects />
      <AvaialbleProjects />
    </main>
  );
}
