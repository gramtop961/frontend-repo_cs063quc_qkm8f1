/*
  FeatureCards.jsx
  Purpose: Highlight core pillars with animated, accessible cards.
  Author: Flames.Blue
  Usage: Imported by App.jsx
*/
import { motion } from 'framer-motion';
import { Book, Calculator, Heart } from 'lucide-react';

const features = [
  {
    title: 'Words',
    desc: 'Story-driven Persian vocabulary with puzzles and characters.',
    Icon: Book,
    gradient: 'from-fuchsia-400 to-rose-400',
  },
  {
    title: 'Numbers',
    desc: 'Playful math mini-games with tactile feedback and rewards.',
    Icon: Calculator,
    gradient: 'from-cyan-400 to-emerald-400',
  },
  {
    title: 'Kindness',
    desc: 'Empathy-building choices and moral messages after each scene.',
    Icon: Heart,
    gradient: 'from-amber-400 to-pink-400',
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Built for joyful learning</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">Cinematic motion with GPU-only animations, accessible controls, and fully offline assets.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow"
              aria-label={f.title}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} text-white flex items-center justify-center shadow-md`}>
                <f.Icon size={20} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-1 text-neutral-600 dark:text-neutral-300">{f.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
