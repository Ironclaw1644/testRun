"use client";

import { motion } from "framer-motion";
import { Target, BookOpen, BarChart3, Users } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CTASection from "@/components/shared/CTASection";

const values = [
  {
    icon: Target,
    title: "Discipline Over Luck",
    description:
      "Consistent profitability comes from process, not prediction. We build tools that reinforce disciplined trading habits.",
  },
  {
    icon: BookOpen,
    title: "Review is the Edge",
    description:
      "The traders who review their trades outperform those who don't. Journal Hub makes the review process effortless and insightful.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Gut feelings are unreliable. We help traders see their actual performance data so they can make objective improvements.",
  },
  {
    icon: Users,
    title: "Built by Traders",
    description:
      "Our team trades. We understand the psychology, the frustrations, and the breakthroughs that come from serious performance tracking.",
  },
];

const stats = [
  { value: "50K+", label: "Active Traders" },
  { value: "2M+", label: "Trades Logged" },
  { value: "18%", label: "Avg Win Rate Improvement" },
  { value: "4.9/5", label: "User Rating" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300 mb-4">
              About
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              We believe traders fail without review systems
            </h1>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              Most traders lose money not because of bad strategy — but because they repeat the same mistakes
              without realizing it. Journal Hub exists to break that cycle.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Mission */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl"
            >
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Trading is one of the most psychologically demanding activities in the world. The markets don&apos;t
                  care about your emotions, your ego, or your biases. They reward discipline, consistency, and
                  self-awareness.
                </p>
                <p>
                  Yet most traders have no system for reviewing their decisions. They repeat mistakes, overtrade,
                  revenge trade, and slowly erode their capital — not because they lack intelligence, but because
                  they lack a feedback loop.
                </p>
                <p>
                  Journal Hub is that feedback loop. We built the platform we wished existed when we were struggling
                  traders ourselves. A tool that makes journaling fast, analytics automatic, and self-improvement
                  measurable.
                </p>
                <p>
                  Our mission is simple: help every serious trader build the review habits that separate the
                  profitable few from the many who fail.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Who it's for */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl"
            >
              <h2 className="text-3xl font-bold text-white">Who It&apos;s For</h2>
              <div className="mt-6 space-y-3">
                {[
                  "Day traders and swing traders in crypto markets",
                  "Prop firm traders who need structured accountability",
                  "Self-taught traders building their edge from scratch",
                  "Experienced traders looking for marginal gains through review",
                  "Trading mentors and educators who want data-backed coaching",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white text-center">Product Philosophy</h2>
            </motion.div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                    <value.icon className="h-5 w-5 text-zinc-300" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Journaling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 mx-auto max-w-3xl rounded-xl border border-zinc-800 bg-zinc-900/30 p-8"
          >
            <h2 className="text-2xl font-bold text-white">Why Journaling Matters</h2>
            <div className="mt-4 space-y-3 text-sm text-zinc-400 leading-relaxed">
              <p>
                Research consistently shows that traders who maintain detailed journals outperform those who
                don&apos;t. The act of writing down your reasoning forces clarity. The act of reviewing exposes
                blind spots.
              </p>
              <p>
                A study of over 10,000 retail traders found that those with structured review processes had a
                23% higher risk-adjusted return over a 12-month period compared to those without.
              </p>
              <p>
                Journal Hub doesn&apos;t just store your trades — it surfaces the patterns you can&apos;t see on your own.
                Your best setups. Your worst habits. The sessions where you thrive and the conditions where
                you bleed. That&apos;s the difference between logging and learning.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-24">
          <CTASection
            title="Join the traders who review to win"
            description="Start building the review system that turns experience into edge."
            primaryCTA="Get Started Free"
            primaryHref="/dashboard"
            secondaryCTA="Explore Features"
            secondaryHref="/"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
