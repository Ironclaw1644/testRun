"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/shared/SectionHeader";

export default function TestimonialsSection() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="Trusted by disciplined traders"
          description="Hear from traders who transformed their results by building a review system."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold text-zinc-300">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{t.content}</p>
              <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-800/30 px-4 py-3 text-center">
                <p className="text-xl font-bold text-emerald-400">{t.metric}</p>
                <p className="text-xs text-zinc-500">{t.metricLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
