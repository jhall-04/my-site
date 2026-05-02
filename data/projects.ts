export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  longDescription?: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "cinegraph",
    title: "CineGraph",
    year: "2026",
    description:
      "Multi-agent film discovery and critique engine with multi-modal retrieval.",
    longDescription:
      "A LangGraph-based DAG of specialized agents — Query Rewriter, Metadata RAG, Visual Style, Audio Mood, and Critic Voice — that work together to surface films matching a user's intent. Uses pgvector on Supabase for semantic search, BAAI/bge-large-en for embeddings, and Claude Sonnet for orchestration. Evaluated with a custom RAGAS harness against a hand-curated golden dataset.",
    tech: [
      "LangGraph",
      "Claude Sonnet",
      "pgvector",
      "Supabase",
      "FastAPI",
      "Next.js",
      "LangSmith",
    ],
    githubUrl: "https://github.com/jhall-04/tbd",
    featured: true,
  },
  {
    slug: "from-scratch",
    title: "From Scratch",
    year: "2026",
    description: "Various small projects exploring different machine learning concepts annd algorithms.",
    tech: ["Python", "numpy", "pandas", "pytorch"],
    githubUrl: "https://github.com/jhall-04/FromScatch",
    featured: true,
  },
];