/*
  Footer.jsx
  Purpose: Simple footer with theme statement and small print.
  Author: Flames.Blue
  Usage: Imported by App.jsx
*/
export default function Footer() {
  return (
    <footer className="relative py-10 bg-white dark:bg-neutral-950 border-t border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-neutral-600 dark:text-neutral-300">© {new Date().getFullYear()} Kalamestan — crafted for offline, kid-friendly learning.</p>
        <p className="text-neutral-500 dark:text-neutral-400">GPU-only animations • 60fps targets • No external calls</p>
      </div>
    </footer>
  );
}
