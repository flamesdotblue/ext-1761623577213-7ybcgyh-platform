import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white text-lg">AI Engineer</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="text-white/80 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            <a href="mailto:hello@aiengineer.dev" className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-3 py-1.5 font-medium hover:bg-white/90 transition">
              <Mail className="h-4 w-4" /> Hire Me
            </a>
          </nav>
          <div className="md:hidden flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
