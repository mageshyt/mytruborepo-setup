import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      <Header />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              🚀 Powered by Turborepo
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Build Faster
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-fuchsia-600">
              Ship Smarter
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            A modern full-stack starter kit combining Next.js 15 and NestJS in a
            powerful Turborepo monorepo. Everything you need to build
            production-ready web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all">
              Start Building →
            </button>
            <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:scale-105 transition-all">
              Explore Docs
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: "Components", value: "50+" },
            { label: "Type Safe", value: "100%" },
            { label: "Performance", value: "A+" },
            { label: "Apps", value: "2" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div id="features" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Built with the best tools and practices
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description:
                  "Optimized build times with Turborepo's intelligent caching and parallel execution",
              },
              {
                icon: "🎨",
                title: "Beautiful UI",
                description:
                  "Crafted with Tailwind CSS and Shadcn UI components for a stunning interface",
              },
              {
                icon: "🔒",
                title: "Type Safety",
                description:
                  "End-to-end TypeScript coverage ensures reliability and better developer experience",
              },
              {
                icon: "📱",
                title: "Responsive",
                description:
                  "Mobile-first design approach ensures your app looks great on any device",
              },
              {
                icon: "🌙",
                title: "Dark Mode",
                description:
                  "Built-in dark mode support with smooth transitions and system preferences",
              },
              {
                icon: "🔧",
                title: "Developer Ready",
                description:
                  "ESLint, Prettier, and Git hooks configured for optimal development workflow",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div id="tech" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Powerful Tech Stack
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Industry-leading technologies working together
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-blue-600">⚛️</span> Frontend
              </h3>
              <div className="space-y-3">
                {[
                  {
                    name: "Next.js 15",
                    desc: "React framework with App Router",
                  },
                  { name: "React 19", desc: "Latest UI library features" },
                  { name: "TypeScript 5", desc: "Type-safe JavaScript" },
                  { name: "Tailwind CSS", desc: "Utility-first styling" },
                  { name: "Shadcn UI", desc: "Accessible components" },
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg"
                  >
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {tech.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {tech.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-purple-600">🔧</span> Backend Ready
              </h3>
              <div className="space-y-3">
                {[
                  { name: "NestJS", desc: "Progressive Node.js framework" },
                  { name: "PostgreSQL", desc: "Reliable database solution" },
                  { name: "Prisma", desc: "Next-gen ORM" },
                  { name: "JWT Auth", desc: "Secure authentication" },
                  { name: "GraphQL/REST", desc: "Flexible API options" },
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg"
                  >
                    <span className="text-purple-500 mt-1">→</span>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {tech.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {tech.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div id="docs" className="mb-20">
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 dark:from-slate-950 dark:to-purple-950 rounded-2xl p-12 border border-purple-800 dark:border-slate-800">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-purple-200">Get up and running in minutes</p>
            </div>
            <div className="bg-slate-950 rounded-xl p-6 max-w-2xl mx-auto">
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <span className="text-slate-500"># Clone the repository</span>
                  <div className="text-green-400">
                    git clone [your-repo-url]
                  </div>
                </div>
                <div>
                  <span className="text-slate-500"># Install dependencies</span>
                  <div className="text-green-400">pnpm install</div>
                </div>
                <div>
                  <span className="text-slate-500">
                    # Start development servers
                  </span>
                  <div className="text-green-400">pnpm dev</div>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-slate-400">
                    🎉 Open http://localhost:3000 to see this app
                  </span>
                  <div className="text-slate-400">
                    🎉 Open http://localhost:3001 to see admin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Start Building Today
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Join developers who are shipping faster with this production-ready
              starter kit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all">
                View on GitHub
              </button>
              <button className="px-8 py-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all">
                Read Documentation
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-slate-600 dark:text-slate-400 mb-2">
            Built with ❤️ using Next.js, NestJS, and Turborepo
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © 2025 Your Starter Kit. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
