"use client";

import { BookOpen, TrendingUp, AlertTriangle, Award } from "lucide-react";

const activities = [
  {
    icon: TrendingUp,
    iconColor: "text-emerald-400",
    title: "Trade closed: BTC/USDT Long",
    description: "+$2,230 (3.32%) — Breakout Retest",
    time: "2 hours ago",
  },
  {
    icon: BookOpen,
    iconColor: "text-blue-400",
    title: "Journal entry added",
    description: "Clean breakout retest on BTC — textbook entry",
    time: "2 hours ago",
  },
  {
    icon: TrendingUp,
    iconColor: "text-emerald-400",
    title: "Trade closed: ETH/USDT Short",
    description: "+$1,400 (3.98%) — Supply Zone Rejection",
    time: "1 day ago",
  },
  {
    icon: AlertTriangle,
    iconColor: "text-amber-400",
    title: "Discipline alert",
    description: "3 trades in 2 hours — consider slowing down",
    time: "2 days ago",
  },
  {
    icon: Award,
    iconColor: "text-purple-400",
    title: "Weekly milestone",
    description: "5-day win streak achieved",
    time: "3 days ago",
  },
];

export default function ActivityFeed() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
      <h3 className="text-sm font-semibold text-white">Activity Feed</h3>
      <div className="mt-4 space-y-4">
        {activities.map((activity, i) => (
          <div key={i} className="flex gap-3">
            <div className="mt-0.5 shrink-0">
              <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-zinc-300">{activity.title}</p>
              <p className="text-xs text-zinc-500 truncate">{activity.description}</p>
              <p className="mt-1 text-xs text-zinc-600">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
