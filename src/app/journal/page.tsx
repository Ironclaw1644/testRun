"use client";

import { useState } from "react";
import { Search, Filter, Plus } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import JournalCard from "@/components/journal/JournalCard";
import { journalEntries } from "@/data/journal";
import { cn } from "@/lib/utils";

const filterTags = ["All", "Wins", "Losses", "A+ Setup", "Mistakes", "Lessons"];

export default function JournalPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = journalEntries.filter((entry) => {
    const matchesSearch =
      searchQuery === "" ||
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.pair.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilter =
      activeFilter === "All" ||
      (activeFilter === "Wins" && entry.status === "win") ||
      (activeFilter === "Losses" && entry.status === "loss") ||
      (activeFilter === "A+ Setup" && entry.tags.includes("A+ setup")) ||
      (activeFilter === "Mistakes" && entry.discipline <= 2) ||
      (activeFilter === "Lessons" && entry.lessons.length > 0);

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Navbar />
      <div className="flex pt-16 min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-white">Trade Journal</h1>
                <p className="text-sm text-zinc-500 mt-1">
                  {journalEntries.length} entries · Review what matters.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors">
                <Plus className="h-4 w-4" />
                New Entry
              </button>
            </div>

            {/* Search & Filters */}
            <div className="mb-6 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search journal entries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600"
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto">
                <Filter className="h-4 w-4 shrink-0 text-zinc-500" />
                {filterTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveFilter(tag)}
                    className={cn(
                      "shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                      activeFilter === tag
                        ? "border-zinc-600 bg-zinc-800 text-white"
                        : "border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                    )}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Journal Entries */}
            <div className="space-y-4">
              {filtered.map((entry) => (
                <JournalCard key={entry.id} entry={entry} />
              ))}
              {filtered.length === 0 && (
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-12 text-center">
                  <p className="text-sm text-zinc-500">No entries match your search.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
