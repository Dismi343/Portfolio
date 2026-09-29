import React from 'react';
import { FaMediumM, FaExternalLinkAlt } from 'react-icons/fa';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: 'From Prompt Engineering to Loop Engineering: Building AI Systems That Work in a Loop',
      description:
        'An introduction about the concpet called Loop Engineering and how it can be used.',
      date: '2026',
      link: 'https://medium.com/@yushanhettiarachchi639/from-prompt-engineering-to-loop-engineering-building-ai-systems-that-work-in-a-loop-1aaa4c8c700f',
    },
    {
      id: 2,
      title: 'Semantic PDF Search Engine with Python & ChromaDB',
      description:
        'Exploring how basic RAG system works and how to build a simple RAG system using Python and ChromaDB for semantic search in PDFs.',
      date: '2025',
      link: 'https://medium.com/@yushanhettiarachchi639/semantic-pdf-search-engine-with-python-chromadb-0feaea295d6f',
    },
  ];

  return (
    <section
      id="articles"
      className="relative py-24 md:py-32 bg-[#09090b] text-zinc-100"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <FaMediumM className="text-emerald-500" />
            <span className="text-emerald-500 text-xs font-mono uppercase tracking-[0.2em]">
              Technical Writing
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Medium <span className="text-zinc-500 italic font-light">Articles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col p-8 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-800 text-emerald-500">
                  <FaMediumM size={22} />
                </div>

                <span className="text-xs font-mono text-zinc-600">
                  {article.date}
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-4">
                {article.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                {article.description}
              </p>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full py-3 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all"
              >
                Read Article
                <FaExternalLinkAlt size={10} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;