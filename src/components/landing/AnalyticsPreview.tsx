"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

export default function AnalyticsPreview() {
  return (
    <section className="border-t border-zinc-800/50 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              badge="Analytics"
              title="Your edge gets sharper when you track it"
              description="Go beyond basic PnL tracking. Journal Hub surfaces the behavioral and strategic patterns that separate profitable traders from the rest."
              centered={false}
            />
            <div className="mt-8 space-y-4">
              {[
                { title: "Setup Performance", desc: "See which setups actually print and which ones bleed your account." },
                { title: "Session Analysis", desc: "Find your most profitable trading sessions and stop forcing trades in bad hours." },
                { title: "Habit Scoring", desc: "Track rule adherence and correlate discipline with performance over time." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4"
                >
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Setup Win Rates</h3>
                <span className="text-xs text-zinc-500">Last 30 days</span>
              </div>
              {[
                { name: "Breakout Retest", rate: 78, color: "bg-emerald-500" },
                { name: "Ascending Triangle", rate: 74, color: "bg-emerald-500" },
                { name: "Supply/Demand", rate: 71, color: "bg-emerald-500" },
                { name: "Golden Cross", rate: 65, color: "bg-blue-500" },
                { name: "Mean Reversion", rate: 58, color: "bg-amber-500" },
                { name: "Counter-Trend", rate: 42, color: "bg-red-500" },
              ].map((setup) => (
                <div key={setup.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">{setup.name}</span>
                    <span className="text-zinc-300">{setup.rate}%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-zinc-800">
                    <div
                      className={`h-full rounded-full ${setup.color} transition-all`}
                      style={{ width: `${setup.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
