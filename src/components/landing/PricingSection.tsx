"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { pricingTiers } from "@/data/pricing";
import SectionHeader from "@/components/shared/SectionHeader";

export default function PricingSection() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Pricing"
          title="Invest in your trading edge"
          description="Start free. Upgrade when you're ready to take your performance seriously."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative rounded-xl border p-8",
                tier.highlighted
                  ? "border-white/20 bg-zinc-900/80 shadow-lg shadow-white/5"
                  : "border-zinc-800 bg-zinc-900/30"
              )}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-900">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{tier.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-white">
                  {tier.price === 0 ? "Free" : `$${tier.price}`}
                </span>
                {tier.price > 0 && <span className="text-zinc-500">/month</span>}
              </div>
              <button
                className={cn(
                  "mt-8 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors",
                  tier.highlighted
                    ? "bg-white text-zinc-900 hover:bg-zinc-200"
                    : "border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                )}
              >
                {tier.cta}
              </button>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                    <span className="text-sm text-zinc-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
