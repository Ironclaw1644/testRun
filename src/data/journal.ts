export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  pair: string;
  direction: "long" | "short";
  pnl: number;
  status: "win" | "loss" | "breakeven";
  mood: "confident" | "neutral" | "anxious" | "frustrated" | "focused";
  confidence: number; // 1-5
  discipline: number; // 1-5
  setup: string;
  tags: string[];
  execution: string;
  mistakes: string;
  lessons: string;
  notes: string;
}

export const journalEntries: JournalEntry[] = [
  {
    id: "j1",
    date: "2026-03-24",
    title: "Clean breakout retest on BTC — textbook entry",
    pair: "BTC/USDT",
    direction: "long",
    pnl: 2230,
    status: "win",
    mood: "focused",
    confidence: 5,
    discipline: 5,
    setup: "Breakout Retest",
    tags: ["trend-following", "patience", "A+ setup"],
    execution: "Waited for the retest of the breakout level at $67,250. Entry was clean, stop was tight below the retest wick. Let the trade run to the 2.8R target without interference.",
    mistakes: "None on this trade. Executed the plan perfectly.",
    lessons: "When the setup is clean and confluence is high, trust the process. The patience to wait for the retest instead of chasing the breakout made all the difference.",
    notes: "BTC showed strong momentum after the break of the previous range high. Volume confirmed the move. This is the kind of trade I want to replicate consistently.",
  },
  {
    id: "j2",
    date: "2026-03-23",
    title: "ETH supply zone rejection — solid short",
    pair: "ETH/USDT",
    direction: "short",
    pnl: 1400,
    status: "win",
    mood: "confident",
    confidence: 4,
    discipline: 4,
    setup: "Supply Zone Rejection",
    tags: ["mean-reversion", "supply-demand", "clean execution"],
    execution: "Identified a clear supply zone at $3,520 from the 4H chart. Price wicked into the zone and showed a bearish engulfing on the 15m. Entered short with a stop above the zone.",
    mistakes: "Could have sized up slightly given the quality of the setup. Left some money on the table by being too conservative.",
    lessons: "Supply zones from higher timeframes tend to hold well when approached for the first time. Trust the levels more and size appropriately.",
    notes: "ETH was showing relative weakness to BTC. The divergence gave additional confidence in the short thesis.",
  },
  {
    id: "j3",
    date: "2026-03-22",
    title: "SOL demand zone failed — stopped out",
    pair: "SOL/USDT",
    direction: "long",
    pnl: -430,
    status: "loss",
    mood: "frustrated",
    confidence: 3,
    discipline: 2,
    setup: "Demand Zone Bounce",
    tags: ["failed-setup", "overtrading", "lesson-learned"],
    execution: "Entered long at $142.50 expecting a bounce from the demand zone. The zone was already tested twice before, weakening the level. Got stopped out quickly.",
    mistakes: "Took the trade despite the zone being tested multiple times. Should have recognized the diminishing probability. Also entered during low-volume hours which reduced the chance of a strong bounce.",
    lessons: "Demand/supply zones weaken with each touch. A third test of a zone has much lower probability. Need to factor in how many times a level has been tested before taking the trade.",
    notes: "This was an impulsive trade. I felt like I needed to be in a position after missing the BTC move earlier in the day. Classic FOMO-driven entry.",
  },
  {
    id: "j4",
    date: "2026-03-21",
    title: "BTC golden cross trend follow — held through noise",
    pair: "BTC/USDT",
    direction: "long",
    pnl: 1300,
    status: "win",
    mood: "neutral",
    confidence: 4,
    discipline: 5,
    setup: "Golden Cross",
    tags: ["trend-following", "patience", "held-through-noise"],
    execution: "Entered on the golden cross signal on the 1H chart. Price pulled back 1.5% after entry but I held firm because the thesis was intact. Eventually ran to target.",
    mistakes: "Initially felt anxious during the pullback and almost closed the position. Need to work on emotional resilience during drawdowns.",
    lessons: "If the thesis is intact and the stop hasn't been hit, there's no reason to close. The pullback was noise, not a signal. Trust the process.",
    notes: "This trade tested my patience. The 1.5% drawdown felt larger in the moment than it actually was. Journaling helps me recognize this pattern.",
  },
  {
    id: "j5",
    date: "2026-03-20",
    title: "AVAX counter-trend short — fought the trend",
    pair: "AVAX/USDT",
    direction: "short",
    pnl: -600,
    status: "loss",
    mood: "anxious",
    confidence: 2,
    discipline: 1,
    setup: "Resistance Rejection",
    tags: ["counter-trend", "revenge-trade", "poor-discipline"],
    execution: "Shorted AVAX at $38.90 expecting a rejection from resistance. But AVAX was in a strong uptrend and the resistance level was broken easily. Got stopped out at $40.10.",
    mistakes: "This was a revenge trade after the SOL loss. I was trying to make back the loss instead of waiting for a quality setup. Counter-trend trading in a strong uptrend is low probability.",
    lessons: "Never trade to recover losses. Each trade must stand on its own merit. Counter-trend setups need much stronger confirmation than trend-following setups.",
    notes: "I need to implement a rule: after 2 consecutive losses, take a 2-hour break. This would have prevented this trade.",
  },
  {
    id: "j6",
    date: "2026-03-19",
    title: "ETH ascending triangle breakout — patience paid off",
    pair: "ETH/USDT",
    direction: "long",
    pnl: 1500,
    status: "win",
    mood: "confident",
    confidence: 5,
    discipline: 5,
    setup: "Ascending Triangle",
    tags: ["pattern-trading", "breakout", "A+ setup"],
    execution: "Identified an ascending triangle forming on the 4H ETH chart. Waited for the breakout candle to close above resistance before entering. Clean move to target.",
    mistakes: "No mistakes. This was a well-planned and well-executed trade.",
    lessons: "Ascending triangles in uptrends continue to be one of my highest-probability setups. Keep focusing on what works.",
    notes: "This was my third A+ setup this week. When I'm selective and patient, the results speak for themselves.",
  },
];

export const moodOptions = [
  { value: "confident", label: "Confident", color: "text-emerald-400" },
  { value: "focused", label: "Focused", color: "text-blue-400" },
  { value: "neutral", label: "Neutral", color: "text-zinc-400" },
  { value: "anxious", label: "Anxious", color: "text-amber-400" },
  { value: "frustrated", label: "Frustrated", color: "text-red-400" },
];
