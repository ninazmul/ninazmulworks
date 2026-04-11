"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";

const categories = ["All", "WebApps", "MobileApps", "Games"];

export default function ProjectFilters({ projects }: { projects: any[] }) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All";

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (p) => p.category?.toLowerCase() === selectedCategory.toLowerCase(),
        );

  return (
    <>
      {/* Filters */}
      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/projects?category=${cat}`}
            className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 border ${
              selectedCategory === cat
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                : "bg-white/[0.03] border-white/10 text-zinc-500 hover:text-white hover:border-white/30"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-20 max-w-7xl mx-auto">
        {filtered.map((p, idx) => (
          <motion.div
            key={p.id || p._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <Link
                href={`/projects/${p.id || p._id}`}
                className="group block"
            >
                <GlassCard className="p-5 border-white/5 hover:border-zinc-500/50 transition-all duration-500 h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-xl border border-white/10 aspect-video mb-6">
                        <img
                            src={p.image || "/assets/images/og-image.png"}
                            alt={p.title || "Project cover"}
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                            <span className="text-[10px] uppercase tracking-widest text-white border border-white/20 px-3 py-1 rounded-full bg-black/20">
                                View Specification
                            </span>
                        </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                        <h2 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform mb-2">
                            {p.title}
                        </h2>
                        <p className="text-sm text-zinc-500 font-light line-clamp-2 leading-relaxed mb-6">
                            {p.description}
                        </p>
                        
                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-tighter line-clamp-1 flex-1">
                                {p.stack}
                            </span>
                            <span className="text-[9px] uppercase tracking-widest bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-1 rounded ml-4 whitespace-nowrap">
                                {p.category}
                            </span>
                        </div>
                    </div>
                </GlassCard>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
