"use client";

import React, { useEffect, useState } from "react";
import { getAllReviews } from "@/lib/actions/review.actions";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { cn } from "@/lib/utils";
import { testimonials as staticTestimonials } from "@/data";

const Clients = () => {
  const [reviews, setReviews] = useState<any[]>(staticTestimonials);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getAllReviews();
        const verified = data?.filter((r: any) => r.verified) || [];
        // Merge static with verified dynamic, dynamic first
        if (verified.length > 0) {
            setReviews([...verified, ...staticTestimonials.filter(st => !verified.some((v: any) => v.name === st.name))]);
        }
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
      12000, 
    );
    return () => clearInterval(interval);
  }, [reviews]);

  const currentReview = reviews[index];

  return (
    <section id="testimonials" className="py-24 bg-black text-white px-6 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-white/[0.02] blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500 mb-4 tracking-tight">
                Strategic Endorsements
            </h2>
            <div className="flex items-center justify-center gap-4">
                <span className="h-px w-8 bg-zinc-800" />
                <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.4em]">
                    Validated Engineering Capability
                </p>
                <span className="h-px w-8 bg-zinc-800" />
            </div>
        </div>

        <div className="relative min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
                {currentReview && (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full"
                    >
                        <GlassCard className="p-8 md:p-12 border-white/5 shadow-2xl">
                            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                                <div className="shrink-0 relative group">
                                    <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                                        <Image
                                            src={currentReview.image || "/assets/images/default-avatar.png"}
                                            alt={currentReview.name || "Peer"}
                                            width={96}
                                            height={96}
                                            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 scale-105"
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex-1 space-y-6">
                                    <div className="space-y-1 text-center md:text-left">
                                        <p className="text-2xl font-bold text-white tracking-tight">{currentReview.name}</p>
                                        <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">{currentReview.title}</p>
                                    </div>
                                    
                                    <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed italic text-center md:text-left">
                                        &ldquo;{currentReview.quote}&rdquo;
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-3">
            {reviews.map((_, i) => (
                <button 
                    key={i} 
                    onClick={() => setIndex(i)}
                    className={cn(
                        "transition-all duration-500",
                        index === i ? "w-12 h-1 bg-white" : "w-4 h-1 bg-zinc-900 hover:bg-zinc-800"
                    )}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
