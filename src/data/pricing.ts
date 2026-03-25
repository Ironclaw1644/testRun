export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: 0,
    description: "For traders getting started with journaling.",
    features: [
      "Up to 50 journal entries/month",
      "Basic trade logging",
      "Simple PnL tracking",
      "3 strategy tags",
      "Weekly performance summary",
      "Community access",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: 29,
    description: "For serious traders who want an edge.",
    features: [
      "Unlimited journal entries",
      "Advanced trade analytics",
      "Setup performance tracking",
      "Unlimited strategy tags",
      "Equity curve & drawdown charts",
      "Session & weekday analysis",
      "Habit tracking",
      "CSV import/export",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Elite",
    price: 79,
    description: "For professional traders and fund managers.",
    features: [
      "Everything in Pro",
      "AI-powered trade review",
      "Pattern recognition insights",
      "Multi-account support",
      "Team & mentorship tools",
      "Custom dashboards",
      "API access",
      "White-label options",
      "Dedicated account manager",
      "1-on-1 onboarding call",
    ],
    cta: "Contact Sales",
    highlighted: false,
    badge: "Enterprise",
  },
];
