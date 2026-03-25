"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import type { JournalEntry } from "@/data/journal";

const moodColors: Record<string, string> = {
  confident: "bg-emerald-500/10 text-emerald-400",
  focused: "bg-blue-500/10 text-blue-400",
  neutral: "bg-zinc-500/10 text-zinc-400",
  anxious: "bg-amber-500/10 text-amber-400",
  frustrated: "bg-red-500/10 text-red-400",
};

function RatingDots({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            i < value ? "bg-white" : "bg-zinc-700"
          )}
        />
      ))}
    </div>
  );
}

export default function JournalCard({ entry }: { entry: JournalEntry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 transition-colors hover:border-zinc-700">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-zinc-500">{entry.date}</span>
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium",
                  entry.direction === "long"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-red-500/10 text-red-400"
                )}
              >
                {entry.direction === "long" ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : (
                  <ArrowDownRight className="h-3 w-3" />
                )}
                {entry.pair}
              </span>
              <span
                className={cn(
                  "rounded-md px-2 py-0.5 text-xs font-medium",
                  entry.pnl > 0
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-red-500/10 text-red-400"
                )}
              >
                {entry.pnl > 0 ? "+" : ""}${entry.pnl.toLocaleString()}
              </span>
              <span className={cn("rounded-md px-2 py-0.5 text-xs font-medium capitalize", moodColors[entry.mood])}>
                {entry.mood}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-white truncate">{entry.title}</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700 bg-zinc-800/50 px-2 py-0.5 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-zinc-500">Confidence</p>
                <RatingDots value={entry.confidence} />
              </div>
              <div className="text-right">
                <p className="text-xs text-zinc-500">Discipline</p>
                <RatingDots value={entry.discipline} />
              </div>
            </div>
            {expanded ? (
              <ChevronUp className="h-4 w-4 text-zinc-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-zinc-500" />
            )}
          </div>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-zinc-800 px-6 pb-6 pt-4 space-y-4">
          <div className="sm:hidden flex items-center gap-4 mb-4">
            <div>
              <p className="text-xs text-zinc-500">Confidence</p>
              <RatingDots value={entry.confidence} />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Discipline</p>
              <RatingDots value={entry.discipline} />
            </div>
          </div>
          {[
            { label: "Setup & Execution", content: entry.execution },
            { label: "Mistakes", content: entry.mistakes },
            { label: "Lessons Learned", content: entry.lessons },
            { label: "Notes", content: entry.notes },
          ].map((section) => (
            <div key={section.label}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                {section.label}
              </h4>
              <p className="text-sm leading-relaxed text-zinc-300">{section.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
