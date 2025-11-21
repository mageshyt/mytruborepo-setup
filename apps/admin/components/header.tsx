"use client";

import Link from "next/link";
import { ThemeToggle } from "@workspace/ui/components/theme-toggle";

export function Header() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                Admin Portal
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Starter Kit
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#tech"
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Tech Stack
            </Link>
            <Link
              href="#docs"
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Docs
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
