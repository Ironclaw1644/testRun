"use client";

import { ThumbsUp, ThumbsDown } from "lucide-react";

const topSetups = [
  { name: "Breakout Retest", winRate: 78, trades: 24, pnl: "+$5,400" },
  { name: "Ascending Triangle", winRate: 74, trades: 12, pnl: "+$4,100" },
  { name: "Supply/Demand", winRate: 71, trades: 18, pnl: "+$3,200" },
];

const topMistakes = [
  { name: "Revenge trading", frequency: "12% of trades", impact: "-$2,100" },
  { name: "Trading Friday PM", frequency: "8% of trades", impact: "-$1,800" },
  { name: "Counter-trend entries", frequency: "11% of trades", impact: "-$800" },
];

export default function TopInsights() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <div className="flex items-center gap-2 mb-4">
          <ThumbsUp className="h-4 w-4 text-emerald-400" />
          <h3 className="text-sm font-semibold text-white">Top Setups</h3>
        </div>
        <div className="space-y-3">
          {topSetups.map((setup) => (
            <div
              key={setup.name}
              className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-800/20 px-4 py-3"
            >
              <div>
                <p className="text-sm font-medium text-zinc-300">{setup.name}</p>
                <p className="text-xs text-zinc-500">
                  {setup.winRate}% win rate · {setup.trades} trades
                </p>
              </div>
              <span className="text-sm font-semibold text-emerald-400">{setup.pnl}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <div className="flex items-center gap-2 mb-4">
          <ThumbsDown className="h-4 w-4 text-red-400" />
          <h3 className="text-sm font-semibold text-white">Top Mistakes</h3>
        </div>
        <div className="space-y-3">
          {topMistakes.map((mistake) => (
            <div
              key={mistake.name}
              className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-800/20 px-4 py-3"
            >
              <div>
                <p className="text-sm font-medium text-zinc-300">{mistake.name}</p>
                <p className="text-xs text-zinc-500">{mistake.frequency}</p>
              </div>
              <span className="text-sm font-semibold text-red-400">{mistake.impact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
