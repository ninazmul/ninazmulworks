import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Clients from "@/components/Clients";
import RecentProjects from "@/components/RecentProjects";
import { ContactUs } from "@/components/ContactUs";

const Home = () => {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full relative z-10">
        <Hero />
        <About />
        <TechStack />
        <RecentProjects />
        <Experience />
        <Education />
        <Certifications />
        <Clients />
        <ContactUs />
      </div>
    </main>
  );
};

export default Home;
