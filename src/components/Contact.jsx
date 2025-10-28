import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(34,197,94,0.15)_0%,_transparent_40%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Let’s build something intelligent</h2>
        <p className="mt-3 text-white/80">
          I help teams prototype quickly, evaluate rigorously, and deploy reliably. Available for freelance, advisory, and full-time roles.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:hello@aiengineer.dev" className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2 font-medium hover:bg-white/90 transition">
            <Mail className="h-4 w-4" /> hello@aiengineer.dev
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 font-medium hover:bg-white/10 transition">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 font-medium hover:bg-white/10 transition">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>

        <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Alex — AI Engineer. All rights reserved.</p>
      </div>
    </section>
  );
}
