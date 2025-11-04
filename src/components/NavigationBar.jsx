/*
  NavigationBar.jsx
  Purpose: Sticky top navigation with brand and quick actions.
  Author: Flames.Blue
  Usage: Imported by App.jsx
*/
import { Rocket, Download } from 'lucide-react';

export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow">
            <Rocket size={16} />
          </span>
          <span>Kalamestan</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition">Features</a>
          <a href="#download" className="hover:text-neutral-900 dark:hover:text-white transition">Download</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#download" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition text-sm">
            <Download size={16} />
            <span>Offline Pack</span>
          </a>
        </div>
      </div>
    </header>
  );
}
