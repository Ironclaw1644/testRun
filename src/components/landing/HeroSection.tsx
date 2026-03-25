"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/30 via-zinc-950 to-zinc-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-white/[0.02] rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-800/30 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Now tracking 2M+ trades
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Trade with data,
            <br />
            <span className="text-zinc-500">not ego.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-zinc-400 sm:text-xl"
          >
            Journal Hub is the performance tracking platform built for serious crypto traders.
            <br className="hidden sm:block" />
            Log trades, review patterns, and sharpen your edge — every single day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
            >
              Start Journaling Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:bg-zinc-800"
            >
              <Play className="h-4 w-4" />
              Watch Demo
            </Link>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="relative mx-auto max-w-5xl rounded-xl border border-zinc-800 bg-zinc-900/50 p-1 shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-zinc-700" />
              <div className="h-3 w-3 rounded-full bg-zinc-700" />
              <div className="h-3 w-3 rounded-full bg-zinc-700" />
              <div className="mx-auto rounded-md bg-zinc-800 px-4 py-1 text-xs text-zinc-500">
                app.journalhub.io/dashboard
              </div>
            </div>
            <div className="rounded-lg bg-zinc-950 p-6">
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "Portfolio", value: "$142,800", change: "+12.4%", up: true },
                  { label: "Today's PnL", value: "+$2,230", change: "+3.32%", up: true },
                  { label: "Win Rate", value: "68.5%", change: "+2.1%", up: true },
                  { label: "Avg R:R", value: "2.4:1", change: "+0.3", up: true },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <p className="text-xs text-zinc-500">{stat.label}</p>
                    <p className="mt-1 text-lg font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-emerald-400">{stat.change}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="col-span-2 h-48 rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <p className="text-xs text-zinc-500">Equity Curve</p>
                  <div className="mt-4 flex items-end gap-1 h-28">
                    {[40, 45, 38, 52, 58, 50, 65, 68, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/20 to-emerald-500/60"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="h-48 rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <p className="text-xs text-zinc-500">Recent Trades</p>
                  <div className="mt-3 space-y-2">
                    {["BTC +$2,230", "ETH +$1,400", "SOL -$430", "BTC +$1,300"].map((t, i) => (
                      <div key={i} className="flex items-center justify-between rounded bg-zinc-800/50 px-2 py-1.5">
                        <span className="text-xs text-zinc-300">{t.split(" ")[0]}</span>
                        <span className={`text-xs ${t.includes("+") ? "text-emerald-400" : "text-red-400"}`}>
                          {t.split(" ")[1]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
