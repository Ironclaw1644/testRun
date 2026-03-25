export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  metric: string;
  metricLabel: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Chen",
    role: "Full-time Crypto Trader",
    avatar: "MC",
    content: "Journal Hub completely changed how I approach my trading. I went from impulsive entries to having a structured review process. My win rate jumped 18% in two months.",
    metric: "+18%",
    metricLabel: "Win Rate Increase",
  },
  {
    name: "Sarah Okonkwo",
    role: "Swing Trader & Analyst",
    avatar: "SO",
    content: "The analytics dashboard revealed patterns in my trading I never would have found on my own. I discovered I was consistently losing money on Fridays — that single insight saved me thousands.",
    metric: "$4.2K",
    metricLabel: "Monthly Savings",
  },
  {
    name: "David Park",
    role: "Prop Firm Trader",
    avatar: "DP",
    content: "I needed a tool that could keep up with the discipline required at a prop firm. Journal Hub's habit tracking and setup analysis are exactly what I needed to stay accountable.",
    metric: "92%",
    metricLabel: "Rule Adherence",
  },
];
