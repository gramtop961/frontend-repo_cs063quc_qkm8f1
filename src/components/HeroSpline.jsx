/*
  HeroSpline.jsx
  Purpose: Cinematic hero section with interactive Spline cover and overlay content.
  Author: Flames.Blue
  Usage: Imported by App.jsx
*/
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80 dark:from-neutral-900/70 dark:via-transparent dark:to-neutral-900/80" />
      <div
        className="pointer-events-none absolute -inset-16 blur-3xl opacity-60 mix-blend-screen"
        style={{
          background:
            'radial-gradient(60% 60% at 20% 30%, rgba(199,210,254,0.35) 0%, rgba(0,0,0,0) 60%), radial-gradient(50% 50% at 80% 70%, rgba(34,211,238,0.35) 0%, rgba(0,0,0,0) 65%)',
        }}
      />
      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white drop-shadow-sm">
            Kalamestan — A Cinematic Offline Learning Adventure
          </h1>
          <p className="mt-4 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            Learn words, numbers, and kindness through a magical 2.5D world. No internet required — crafted for smooth 60fps, zero CLS, and fast loads.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#features" className="px-5 py-3 rounded-xl bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-400 text-white shadow-lg shadow-cyan-500/20 hover:brightness-105 transition">Explore Features</a>
            <a href="#download" className="px-5 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Download Offline Pack</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
