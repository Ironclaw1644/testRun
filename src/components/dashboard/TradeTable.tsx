"use client";

import { cn } from "@/lib/utils";
import { trades } from "@/data/trades";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function TradeTable() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50">
      <div className="flex items-center justify-between p-6 pb-4">
        <h3 className="text-sm font-semibold text-white">Recent Trades</h3>
        <button className="text-xs text-zinc-500 hover:text-white transition-colors">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-t border-zinc-800">
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500">Pair</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500">Direction</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500">Setup</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500">PnL</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500">R:R</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {trades.slice(0, 6).map((trade) => (
              <tr key={trade.id} className="transition-colors hover:bg-zinc-800/20">
                <td className="px-6 py-3">
                  <span className="text-sm font-medium text-white">{trade.pair}</span>
                </td>
                <td className="px-6 py-3">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium",
                      trade.direction === "long"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-red-500/10 text-red-400"
                    )}
                  >
                    {trade.direction === "long" ? (
                      <ArrowUpRight className="h-3 w-3" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3" />
                    )}
                    {trade.direction.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-3">
                  <span className="text-sm text-zinc-400">{trade.setup}</span>
                </td>
                <td className="px-6 py-3 text-right">
                  <span
                    className={cn(
                      "text-sm font-medium",
                      trade.pnl > 0
                        ? "text-emerald-400"
                        : trade.pnl < 0
                        ? "text-red-400"
                        : "text-zinc-400"
                    )}
                  >
                    {trade.pnl > 0 ? "+" : ""}${trade.pnl.toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-3 text-right">
                  <span className="text-sm text-zinc-400">{trade.riskReward.toFixed(1)}</span>
                </td>
                <td className="px-6 py-3 text-right">
                  <span className="text-sm text-zinc-500">{trade.duration}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
