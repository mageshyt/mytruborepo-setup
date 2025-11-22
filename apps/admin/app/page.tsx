import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Header />

      {/* Hero Section */}
      <main className="relative">
        {/* Abstract Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-20 relative">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">
                Next.js 16 + NestJS
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
              Admin Dashboard
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x">
                Starter Kit
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              A production-ready admin portal built with modern technologies.
              Turborepo monorepo with Next.js frontend and NestJS backend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 bg-card text-card-foreground rounded-xl font-semibold border border-border hover:border-primary/50 hover:bg-accent/50 hover:scale-105 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div id="features" className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-16">
              <span className="border-b-4 border-primary/20 pb-2">Features</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="group p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 hover:bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                >
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div id="tech" className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-16">
              <span className="border-b-4 border-primary/20 pb-2">Tech Stack</span>
            </h2>
            <div className="bg-card/30 backdrop-blur-md rounded-3xl border border-border p-10 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
              
              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-blue-500/10 text-blue-500">⚛️</span>
                    Frontend
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Next.js 15 (App Router)",
                      "React 19",
                      "TypeScript 5",
                      "Tailwind CSS",
                      "Shadcn UI"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground group">
                        <span className="h-6 w-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center text-xs group-hover:scale-110 transition-transform">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-orange-500/10 text-orange-500">🛠️</span>
                    Backend (Coming Soon)
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "NestJS",
                      "PostgreSQL",
                      "Prisma ORM",
                      "JWT Auth",
                      "REST & GraphQL"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground group">
                        <span className="h-6 w-6 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Start */}
          <div id="docs" className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-16">
              <span className="border-b-4 border-primary/20 pb-2">Quick Start</span>
            </h2>
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 shadow-2xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
              </div>
              <div className="space-y-6 font-mono text-sm">
                {[
                  { comment: "# Install dependencies", cmd: "pnpm install" },
                  { comment: "# Run development server", cmd: "pnpm dev" },
                  { comment: "# Build for production", cmd: "pnpm build" }
                ].map((step, i) => (
                  <div key={i} className="group/line">
                    <p className="text-slate-500 mb-1 select-none">{step.comment}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-700 select-none">$</span>
                      <code className="text-emerald-400">{step.cmd}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center py-12 border-t border-border">
            <p className="text-muted-foreground">
              Built with ❤️ using Next.js, NestJS, and Turborepo
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
