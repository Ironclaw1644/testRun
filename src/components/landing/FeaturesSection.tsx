"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  BarChart3,
  Target,
  Brain,
  TrendingUp,
  Shield,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const features = [
  {
    icon: BookOpen,
    title: "Trade Journaling",
    description:
      "Log every trade with structured entries — setup, execution, mistakes, and lessons. Build a searchable library of your trading decisions.",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description:
      "Visualize your performance across setups, sessions, weekdays, and timeframes. Find the patterns that matter.",
  },
  {
    icon: Target,
    title: "Setup Tracking",
    description:
      "Tag and categorize your setups. See which strategies actually make you money and which ones you should drop.",
  },
  {
    icon: Brain,
    title: "Behavioral Insights",
    description:
      "Track mood, confidence, and discipline scores. Identify the emotional patterns that lead to your best and worst trades.",
  },
  {
    icon: TrendingUp,
    title: "Equity Tracking",
    description:
      "Monitor your equity curve, drawdowns, and consistency over time. Watch your edge compound as your discipline improves.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Track risk-reward ratios, position sizes, and risk per trade. Build the habits that keep you in the game long-term.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Features"
          title="Everything you need to trade better"
          description="A complete toolkit for traders who believe that reviewing their performance is the fastest path to profitability."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 transition-colors group-hover:bg-zinc-700">
                <feature.icon className="h-5 w-5 text-zinc-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
