/*
  App.jsx
  Purpose: Main application shell composing cinematic hero and feature sections.
  Author: Flames.Blue
  Usage: Entry UI mounted by src/main.jsx
*/
import NavigationBar from './components/NavigationBar.jsx';
import HeroSpline from './components/HeroSpline.jsx';
import FeatureCards from './components/FeatureCards.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 selection:bg-cyan-200/60 selection:text-neutral-900">
      <NavigationBar />
      <main>
        <HeroSpline />
        <FeatureCards />
        {/* Anchor target for downloads */}
        <section id="download" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl p-8 md:p-10 border border-black/5 dark:border-white/10 bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-950/40 dark:to-cyan-950/30">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">Download the Offline Pack</h2>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-2xl">All assets, music, and scenes will run entirely offline. Perfect for classrooms and safe home use.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">Get Starter Content</button>
                <button className="px-5 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Read Setup Guide</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
