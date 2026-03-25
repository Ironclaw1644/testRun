"use client";

import {
  DollarSign,
  TrendingUp,
  Target,
  BarChart3,
} from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatCard from "@/components/shared/StatCard";
import EquityChart from "@/components/dashboard/EquityChart";
import TradeTable from "@/components/dashboard/TradeTable";
import TopInsights from "@/components/dashboard/TopInsights";
import ActivityFeed from "@/components/dashboard/ActivityFeed";

const stats = [
  {
    title: "Portfolio Balance",
    value: "$142,800",
    change: "+12.4% this month",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Today's PnL",
    value: "+$2,230",
    change: "+3.32%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "Win Rate",
    value: "68.5%",
    change: "+2.1% vs last month",
    changeType: "positive" as const,
    icon: Target,
  },
  {
    title: "Avg Risk-Reward",
    value: "2.4:1",
    change: "+0.3 improvement",
    changeType: "positive" as const,
    icon: BarChart3,
  },
];

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <div className="flex pt-16 min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-sm text-zinc-500 mt-1">Welcome back. Here&apos;s your trading overview.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.title} {...stat} index={i} />
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <EquityChart />
              </div>
              <ActivityFeed />
            </div>

            <div className="mt-8">
              <TopInsights />
            </div>

            <div className="mt-8">
              <TradeTable />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
