import { FaFacebook, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { FaGithub } from "react-icons/fa6";

export const socialMedia = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/ninazmul",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/ninazmul",
  },
  {
    id: 3,
    icon: <FaFacebook />,
    link: "https://www.facebook.com/ninazmul01",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white relative py-16 px-6 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left Section */}
        <div className="max-w-md">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
            Nazmul Islam
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed font-light">
            Architecting high-performance digital ecosystems. 
            Focused on bridging technical complexity with elegant 
            user experiences.
          </p>
          
          <div className="flex items-center gap-4 mt-8">
            {socialMedia.map((item) => (
                <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                >
                    <div className="text-xl">{item.icon}</div>
                </a>
            ))}
          </div>
        </div>

        {/* Right Section / Links */}
        <div className="grid grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">Navigation</p>
                <ul className="space-y-2 text-sm font-light text-zinc-400">
                    <li className="hover:text-white transition-colors"><a href="#hero">Home</a></li>
                    <li className="hover:text-white transition-colors"><a href="#about">About</a></li>
                    <li className="hover:text-white transition-colors"><a href="#projects">Work</a></li>
                    <li className="hover:text-white transition-colors"><a href="#experience">Experience</a></li>
                    <li className="hover:text-white transition-colors"><a href="#education">Education</a></li>
                    <li className="hover:text-white transition-colors"><a href="#certifications">Certifications</a></li>
                    <li className="hover:text-white transition-colors"><a href="#contact">Contact</a></li>
                </ul>
            </div>
            
            <div className="space-y-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">Engagement</p>
                <ul className="space-y-2 text-sm font-light text-zinc-400">
                    <li className="hover:text-white transition-colors"><a href="mailto:contact@artistycode.studio">Email</a></li>
                    <li className="hover:text-white transition-colors"><a href="https://wa.me/8801580845746" target="_blank">WhatsApp</a></li>
                </ul>
            </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8">
        <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-700">
          &copy; {new Date().getFullYear()} N.I. Nazmul — Developed with technical precision
        </p>

        <div className="flex items-center gap-1.5 grayscale opacity-30 hover:opacity-100 transition-opacity duration-500">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            <span className="text-[10px] font-mono text-zinc-500 uppercase">System Status: Optimal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
