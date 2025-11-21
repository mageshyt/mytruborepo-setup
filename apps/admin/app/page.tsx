"use client";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Next.js 16 + NestJS
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Admin Dashboard
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Starter Kit
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            A production-ready admin portal built with modern technologies.
            Turborepo monorepo with Next.js frontend and NestJS backend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-medium border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:scale-105 transition-all">
              View Demo
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "🚀 Turborepo",
                description:
                  "Monorepo architecture with optimized build pipeline and intelligent caching",
              },
              {
                title: "⚡ Next.js 15",
                description:
                  "Latest Next.js with App Router, Server Components, and streaming",
              },
              {
                title: "🎨 Tailwind CSS",
                description:
                  "Utility-first CSS framework with dark mode support built-in",
              },
              {
                title: "📦 Shared UI",
                description:
                  "Reusable component library shared across all apps in the monorepo",
              },
              {
                title: "🔧 TypeScript",
                description:
                  "Full type safety across frontend and backend with shared types",
              },
              {
                title: "🎯 ESLint",
                description:
                  "Consistent code quality with shared ESLint configurations",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div id="tech" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Tech Stack
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Frontend
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Next.js 15 (App
                    Router)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> React 19
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> TypeScript 5
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Shadcn UI
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Backend (Coming Soon)
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">→</span> NestJS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">→</span> PostgreSQL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">→</span> Prisma ORM
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">→</span> JWT Auth
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">→</span> REST & GraphQL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div id="docs" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Quick Start
          </h2>
          <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-8 border border-slate-800">
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-sm mb-2">
                  # Install dependencies
                </p>
                <code className="text-green-400 font-mono">pnpm install</code>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">
                  # Run development server
                </p>
                <code className="text-green-400 font-mono">pnpm dev</code>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">
                  # Build for production
                </p>
                <code className="text-green-400 font-mono">pnpm build</code>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-slate-600 dark:text-slate-400">
            Built with ❤️ using Next.js, NestJS, and Turborepo
          </p>
        </footer>
      </main>
    </div>
  );
}
