"use client";

import React, { useEffect, useState } from "react";
import { getAllReviews } from "@/lib/actions/review.actions";
import { Star } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { cn } from "@/lib/utils";

const Clients = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getAllReviews();
        setReviews(data.filter((r: any) => r.verified));
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    if (!reviews.length) return;
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % reviews.length),
      8000, 
    );
    return () => clearInterval(interval);
  }, [reviews]);

  const currentReview = reviews[index];

  return (
    <section id="testimonials" className="py-24 bg-black text-white px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-neutral-500 italic">
                Strategic Endorsements
            </h2>
            <p className="text-zinc-500 mt-4 text-sm font-light uppercase tracking-[0.2em] font-mono">
                Validated capability by industry peers
            </p>
        </div>

        <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
                {currentReview ? (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.02, y: -10 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full"
                    >
                        <GlassCard className="p-10 md:p-12 border-zinc-800/50 bg-white/[0.01]">
                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                                <div className="shrink-0">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl skew-x-1">
                                        <Image
                                            src={currentReview.image || "/assets/images/default-avatar.png"}
                                            alt={currentReview.name || "Peer"}
                                            width={64}
                                            height={64}
                                            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                     <div className="flex flex-col gap-0.5">
                                        <p className="text-lg font-bold text-white leading-none tracking-tight">{currentReview.name}</p>
                                        <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">{currentReview.title}</p>
                                    </div>
                                    
                                    <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed italic">
                                        &ldquo;{currentReview.quote}&rdquo;
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                ) : (
                    <div className="text-zinc-800 font-mono text-sm animate-pulse uppercase tracking-[0.5em]">
                        Loading testimony sequence...
                    </div>
                )}
            </AnimatePresence>
        </div>

        <div className="flex justify-center mt-12 gap-2">
            {reviews.map((_, i) => (
                <button 
                    key={i} 
                    onClick={() => setIndex(i)}
                    className={cn(
                        "w-8 h-1 transition-all duration-500 rounded-full",
                        index === i ? "bg-zinc-200" : "bg-zinc-800 hover:bg-zinc-700"
                    )}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
