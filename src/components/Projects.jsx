import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    title: 'Realtime RAG Chatbot',
    description: 'Streaming RAG pipeline with hybrid search, function calling, and guardrails. Deployed with serverless inference and vector DB.',
    tags: ['TypeScript', 'Vercel AI SDK', 'Postgres', 'OpenAI'],
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Vision + LLM Agent',
    description: 'Multimodal agent for UI automation and data extraction. Uses CLIP embeddings, toolformer patterns, and memory.',
    tags: ['Python', 'LangChain', 'Playwright', 'Whisper'],
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Model Serving Platform',
    description: 'High-throughput inference gateway with autoscaling, Triton, and feature logging for continuous evaluation.',
    tags: ['Go', 'Triton', 'Kubernetes', 'Grafana'],
    github: 'https://github.com',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.15)_0%,_transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">Selected Projects</h2>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <Github className="h-4 w-4" /> View GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tags, github, demo }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <p className="mt-2 text-sm text-white/80">{description}</p>
        </div>
        <div className="shrink-0 rounded-md border border-white/10 bg-black/30 p-2">
          <Code className="h-5 w-5 text-white/70" />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/80">{t}</span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <a href={demo} className="inline-flex items-center gap-1.5 text-sm text-white/90 hover:underline" target="_blank" rel="noreferrer">
          <ExternalLink className="h-4 w-4" /> Live
        </a>
        <a href={github} className="inline-flex items-center gap-1.5 text-sm text-white/90 hover:underline" target="_blank" rel="noreferrer">
          <Github className="h-4 w-4" /> Code
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
}
