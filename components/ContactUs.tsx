"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaLocationArrow, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { GlassCard } from "./ui/GlassCard";
import { HoverBorderGradient } from "./ui/HoverBorder";

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

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Engagement initiated successfully.");
        setFormData({
          user_name: "",
          user_email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Transmission failure.");
      }
    } catch {
      toast.error("System error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black text-white px-6 relative scroll-mt-24">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
                {/* Left: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500 mb-6">
                        Start a Conversation
                    </h2>
                    <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-md font-light">
                        Whether you have a technical challenge or a vision for 
                        a new product, I am ready to help you architect the solution.
                    </p>

                    <div className="space-y-6 mb-12">
                        <div className="flex items-center gap-4 group">
                             <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
                                <FaLocationArrow className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                             </div>
                             <div>
                                <p className="text-xs uppercase tracking-widest text-zinc-600 font-mono">Based in</p>
                                <p className="text-sm text-zinc-300">Dhaka, Bangladesh</p>
                             </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialMedia.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="text-xl text-zinc-400 hover:text-white transition-colors">
                                    {item.icon}
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <GlassCard className="p-8 md:p-10 border-white/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-mono ml-1">Name</label>
                                    <input
                                        name="user_name"
                                        placeholder="Alexander Pierce"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 rounded-xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-mono ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="alex@example.com"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 rounded-xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-mono ml-1">Phone (Optional)</label>
                                    <input
                                        name="phone"
                                        placeholder="+880 1XXX-XXXXXX"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 rounded-xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-zinc-500 font-mono ml-1">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Describe your technical vision..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 rounded-xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                                />
                            </div>

                            <button type="submit" className="w-full group">
                                <HoverBorderGradient
                                    containerClassName="w-full rounded-xl"
                                    as="div"
                                    className="bg-black text-white w-full py-4 flex items-center justify-center space-x-3"
                                >
                                    <span className="font-semibold">{loading ? "Transmitting..." : "Send Message"}</span>
                                    {!loading && <FaLocationArrow className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </HoverBorderGradient>
                            </button>
                        </form>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    </section>
  );
};
