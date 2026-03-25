export const performanceData = [
  { month: "Oct", pnl: 1200, trades: 18 },
  { month: "Nov", pnl: -800, trades: 24 },
  { month: "Dec", pnl: 2400, trades: 15 },
  { month: "Jan", pnl: 1800, trades: 20 },
  { month: "Feb", pnl: 3200, trades: 16 },
  { month: "Mar", pnl: 4100, trades: 12 },
];

export const winLossData = [
  { name: "Wins", value: 62, color: "#10b981" },
  { name: "Losses", value: 31, color: "#ef4444" },
  { name: "Breakeven", value: 7, color: "#71717a" },
];

export const setupPerformance = [
  { setup: "Breakout Retest", winRate: 78, avgRR: 2.8, trades: 24, pnl: 5400 },
  { setup: "Supply/Demand", winRate: 71, avgRR: 2.4, trades: 18, pnl: 3200 },
  { setup: "Ascending Triangle", winRate: 74, avgRR: 3.1, trades: 12, pnl: 4100 },
  { setup: "Golden Cross", winRate: 65, avgRR: 1.9, trades: 15, pnl: 1800 },
  { setup: "Mean Reversion", winRate: 58, avgRR: 2.1, trades: 20, pnl: 1200 },
  { setup: "Counter-Trend", winRate: 42, avgRR: 1.4, trades: 11, pnl: -800 },
];

export const weekdayPerformance = [
  { day: "Mon", pnl: 1400, winRate: 68, trades: 16 },
  { day: "Tue", pnl: 2200, winRate: 74, trades: 18 },
  { day: "Wed", pnl: 800, winRate: 60, trades: 20 },
  { day: "Thu", pnl: 3100, winRate: 72, trades: 14 },
  { day: "Fri", pnl: -400, winRate: 45, trades: 22 },
  { day: "Sat", pnl: 600, winRate: 55, trades: 5 },
  { day: "Sun", pnl: 200, winRate: 50, trades: 5 },
];

export const sessionPerformance = [
  { session: "Asian", pnl: 800, winRate: 58, trades: 15, color: "#8b5cf6" },
  { session: "London", pnl: 4200, winRate: 72, trades: 35, color: "#3b82f6" },
  { session: "New York", pnl: 2800, winRate: 68, trades: 40, color: "#10b981" },
  { session: "Overlap", pnl: 1500, winRate: 75, trades: 10, color: "#f59e0b" },
];

export const drawdownData = [
  { date: "Jan 1", value: 0 },
  { date: "Jan 10", value: -2.1 },
  { date: "Jan 20", value: -0.5 },
  { date: "Feb 1", value: -3.8 },
  { date: "Feb 10", value: -1.2 },
  { date: "Feb 20", value: 0 },
  { date: "Mar 1", value: -1.5 },
  { date: "Mar 10", value: -4.2 },
  { date: "Mar 15", value: -2.0 },
  { date: "Mar 24", value: -0.8 },
];

export const tradingHabits = {
  best: [
    { habit: "Waiting for A+ setups", impact: "+$5,400", frequency: "78% of winning trades" },
    { habit: "Trading London session", impact: "+$4,200", frequency: "35% of total trades" },
    { habit: "Using 2%+ risk-reward", impact: "+$6,100", frequency: "62% of trades" },
    { habit: "Pre-market analysis", impact: "+72% win rate", frequency: "When done consistently" },
  ],
  worst: [
    { habit: "Revenge trading after losses", impact: "-$2,100", frequency: "12% of trades" },
    { habit: "Trading Friday afternoons", impact: "-$1,800", frequency: "8% of trades" },
    { habit: "Counter-trend setups", impact: "-$800", frequency: "11% of trades" },
    { habit: "Skipping journal entries", impact: "-15% win rate", frequency: "Weeks without logging" },
  ],
};

export const consistencyData = [
  { week: "W1", rulesFollowed: 85, pnl: 1200 },
  { week: "W2", rulesFollowed: 92, pnl: 2400 },
  { week: "W3", rulesFollowed: 68, pnl: -800 },
  { week: "W4", rulesFollowed: 88, pnl: 1800 },
  { week: "W5", rulesFollowed: 95, pnl: 3200 },
  { week: "W6", rulesFollowed: 78, pnl: 600 },
  { week: "W7", rulesFollowed: 90, pnl: 2100 },
  { week: "W8", rulesFollowed: 96, pnl: 4100 },
];
