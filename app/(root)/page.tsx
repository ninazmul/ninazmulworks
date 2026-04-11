import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import RecentProjects from "@/components/RecentProjects";

const Home = () => {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full relative z-10">
        <Hero />
        <About />
        <TechStack />
        <RecentProjects />
        <Experience />
        <Clients />
      </div>
    </main>
  );
};

export default Home;
