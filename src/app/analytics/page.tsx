"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  LineChart,
  Line,
} from "recharts";
import { TrendingUp, TrendingDown, Target, Clock } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatCard from "@/components/shared/StatCard";
import {
  performanceData,
  winLossData,
  setupPerformance,
  weekdayPerformance,
  sessionPerformance,
  drawdownData,
  tradingHabits,
  consistencyData,
} from "@/data/analytics";

const tooltipStyle = {
  backgroundColor: "#18181b",
  border: "1px solid #27272a",
  borderRadius: "8px",
  fontSize: "12px",
};

export default function AnalyticsPage() {
  return (
    <>
      <Navbar />
      <div className="flex pt-16 min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white">Analytics</h1>
              <p className="text-sm text-zinc-500 mt-1">Deep dive into your trading performance.</p>
            </div>

            {/* Summary Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard title="Total PnL" value="+$11,900" change="+42% vs Q3" changeType="positive" icon={TrendingUp} index={0} />
              <StatCard title="Max Drawdown" value="-4.2%" change="Improving" changeType="positive" icon={TrendingDown} index={1} />
              <StatCard title="Best Setup" value="Breakout" change="78% win rate" changeType="positive" icon={Target} index={2} />
              <StatCard title="Avg Duration" value="3.2h" change="Optimal range" changeType="neutral" icon={Clock} index={3} />
            </div>

            {/* Performance + Win/Loss */}
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-sm font-semibold text-white mb-6">Monthly PnL</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#71717a" }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#71717a" }} tickFormatter={(v) => `$${v / 1000}k`} />
                      <Tooltip contentStyle={tooltipStyle} formatter={(value) => [`$${Number(value).toLocaleString()}`, "PnL"]} />
                      <Bar dataKey="pnl" radius={[4, 4, 0, 0]}>
                        {performanceData.map((entry, i) => (
                          <Cell key={i} fill={entry.pnl >= 0 ? "#10b981" : "#ef4444"} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-sm font-semibold text-white mb-6">Win/Loss Distribution</h3>
                <div className="h-64 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={winLossData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        dataKey="value"
                        strokeWidth={0}
                      >
                        {winLossData.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={tooltipStyle} formatter={(value) => [`${value}%`, "Rate"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 mt-2">
                  {winLossData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-xs text-zinc-400">{item.name} ({item.value}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Setup Performance Table */}
            <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <div className="p-6 pb-4">
                <h3 className="text-sm font-semibold text-white">Setup Performance</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-t border-zinc-800">
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500">Setup</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500">Win Rate</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500">Avg R:R</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500">Trades</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500">PnL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/50">
                    {setupPerformance.map((setup) => (
                      <tr key={setup.setup} className="hover:bg-zinc-800/20 transition-colors">
                        <td className="px-6 py-3 text-sm font-medium text-white">{setup.setup}</td>
                        <td className="px-6 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <div className="w-16 h-1.5 rounded-full bg-zinc-800">
                              <div
                                className="h-full rounded-full bg-emerald-500"
                                style={{ width: `${setup.winRate}%` }}
                              />
                            </div>
                            <span className="text-sm text-zinc-300">{setup.winRate}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-right text-sm text-zinc-400">{setup.avgRR.toFixed(1)}</td>
                        <td className="px-6 py-3 text-right text-sm text-zinc-400">{setup.trades}</td>
                        <td className={`px-6 py-3 text-right text-sm font-medium ${setup.pnl >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                          {setup.pnl >= 0 ? "+" : ""}${setup.pnl.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Weekday + Session */}
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-sm font-semibold text-white mb-6">Weekday Performance</h3>
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weekdayPerformance}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#71717a" }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#71717a" }} tickFormatter={(v) => `$${v / 1000}k`} />
                      <Tooltip contentStyle={tooltipStyle} formatter={(value) => [`$${Number(value).toLocaleString()}`, "PnL"]} />
                      <Bar dataKey="pnl" radius={[4, 4, 0, 0]}>
                        {weekdayPerformance.map((entry, i) => (
                          <Cell key={i} fill={entry.pnl >= 0 ? "#10b981" : "#ef4444"} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-sm font-semibold text-white mb-6">Session Performance</h3>
                <div className="space-y-4">
                  {sessionPerformance.map((session) => (
                    <div key={session.session} className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-800/20 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: session.color }} />
                        <div>
                          <p className="text-sm font-medium text-zinc-300">{session.session}</p>
                          <p className="text-xs text-zinc-500">{session.trades} trades · {session.winRate}% win rate</p>
                        </div>
                      </div>
                      <span className={`text-sm font-semibold ${session.pnl >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                        +${session.pnl.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawdown + Consistency */}
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-sm font-semibold text-white mb-6">Drawdown</h3>
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={drawdownData}>
                      <defs>
                        <linearGradient id="drawdownGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ef4444" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#71717a" }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#71717a" }} tickFormatter={(v) => `${v}%`} />
                      <Tooltip contentStyle={tooltipStyle} formatter={(value) => [`${value}%`, "Drawdown"]} />
                      <Area type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} fill="url(#drawdownGradient)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-sm font-semibold text-white mb-6">Discipline vs Performance</h3>
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={consistencyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#71717a" }} />
                      <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#71717a" }} tickFormatter={(v) => `${v}%`} />
                      <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#71717a" }} tickFormatter={(v) => `$${v / 1000}k`} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Line yAxisId="left" type="monotone" dataKey="rulesFollowed" stroke="#8b5cf6" strokeWidth={2} dot={false} name="Rules Followed %" />
                      <Line yAxisId="right" type="monotone" dataKey="pnl" stroke="#10b981" strokeWidth={2} dot={false} name="PnL ($)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Best & Worst Habits */}
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Best Trading Habits</h3>
                <div className="space-y-3">
                  {tradingHabits.best.map((habit) => (
                    <div key={habit.habit} className="rounded-lg border border-zinc-800 bg-zinc-800/20 px-4 py-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-zinc-300">{habit.habit}</p>
                        <span className="text-sm font-semibold text-emerald-400">{habit.impact}</span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-1">{habit.frequency}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Worst Trading Habits</h3>
                <div className="space-y-3">
                  {tradingHabits.worst.map((habit) => (
                    <div key={habit.habit} className="rounded-lg border border-zinc-800 bg-zinc-800/20 px-4 py-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-zinc-300">{habit.habit}</p>
                        <span className="text-sm font-semibold text-red-400">{habit.impact}</span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-1">{habit.frequency}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
