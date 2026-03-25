"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  index?: number;
}

export default function StatCard({ title, value, change, changeType = "neutral", icon: Icon, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-400">{title}</p>
        <div className="rounded-lg bg-zinc-800/50 p-2">
          <Icon className="h-4 w-4 text-zinc-400" />
        </div>
      </div>
      <p className="mt-3 text-2xl font-bold text-white">{value}</p>
      {change && (
        <p
          className={cn(
            "mt-1 text-sm font-medium",
            changeType === "positive" && "text-emerald-400",
            changeType === "negative" && "text-red-400",
            changeType === "neutral" && "text-zinc-400"
          )}
        >
          {change}
        </p>
      )}
    </motion.div>
  );
}
