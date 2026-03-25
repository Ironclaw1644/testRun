"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { pricingTiers } from "@/data/pricing";
import { motion } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CTASection from "@/components/shared/CTASection";

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade, downgrade, or cancel anytime. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Yes — Pro comes with a 14-day free trial. No credit card required to start.",
  },
  {
    q: "Can I import my existing trades?",
    a: "Pro and Elite plans support CSV import from major exchanges and trading platforms.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your data is retained for 90 days after cancellation. You can export everything at any time.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300 mb-4">
              Pricing
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Invest in your edge
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
              Start free, upgrade when your trading demands more. Every plan includes core journaling features.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{tier.description}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-white">
                    {tier.price === 0 ? "Free" : `$${tier.price}`}
                  </span>
                  {tier.price > 0 && <span className="text-zinc-500">/month</span>}
                </div>
                <button
                  className={cn(
                    "mt-8 w-full rounded-lg px-4 py-3 text-sm font-semibold transition-colors",
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

          {/* FAQ */}
          <div className="mt-24 mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
                  <h3 className="text-sm font-semibold text-white">{faq.q}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <CTASection
            title="Start tracking your performance today"
            description="Join thousands of traders who've made journaling the cornerstone of their edge."
            primaryCTA="Get Started Free"
            primaryHref="/dashboard"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
