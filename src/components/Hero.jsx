import Spline from '@splinetool/react-spline';
import { ArrowRight, Brain, Cpu, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.2)_40%,_rgba(0,0,0,0.7)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex items-center min-h-screen">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles className="h-3.5 w-3.5" />
            Building intelligent products with modern AI
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Hi, I’m Alex — AI Engineer
            <span className="block text-white/70 text-xl sm:text-2xl mt-4 font-normal">I design, train, and ship production-grade AI systems.</span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2 font-medium hover:bg-white/90 transition">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 font-medium hover:bg-white/10 transition">
              Let’s Collaborate
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-white/80">
            <Feature icon={<Brain className='h-4 w-4' />} label="LLM Apps" />
            <Feature icon={<Cpu className='h-4 w-4' />} label="MLOps" />
            <Feature icon={<Sparkles className='h-4 w-4' />} label="GenAI R&D" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-2 backdrop-blur">
      <span className="text-white/90">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
