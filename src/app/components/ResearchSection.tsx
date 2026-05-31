import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { projects, type ProjectData } from '../data/projects';

const filters = [
  'All Projects',
  'Education',
  'Human-AI Collaboration',
  'Fairness & Privacy',
  'Urban Data Science',
  'Computer Vision',
];

const researchProjectIds = new Set<string>([
  'inpres-intergenerational-spillovers',
  'ecosoc-un-wb-alignment',
  'selective-dp-sgd',
  'ai-adversarial-chatbot',
  'missing-middle-housing',
  'pisa-socioeconomic-analysis',
]);

function renderProjectCards(items: ProjectData[]) {
  return (
    <div className="space-y-1">
      {items.map((project) => (
        <article key={project.id} className="border-b border-[#e3e5e2] py-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Link to={`/project/${project.id}`}>
                  <h4 className="text-2xl text-[#212227] transition-colors hover:text-[#7f2f2f]">
                    {project.title}
                  </h4>
                </Link>
                {project.award && (
                  <span className="rounded-sm border border-[#d8c1c1] bg-[#f7eeee] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7f2f2f]">
                    {project.award}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-[#666d76]">
                {project.institution} • {project.date}
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#666d76]">
              <Link to={`/project/${project.id}`} className="hover:text-[#7f2f2f]" title="View details">
                <ExternalLink className="h-4 w-4" />
              </Link>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#7f2f2f]"
                  title="View GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <p className="mt-2 text-sm leading-6 text-[#30343b]">{project.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-sm bg-[#f0f2ef] px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[#5f6871]">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ResearchSection() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [showAllResearch, setShowAllResearch] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const { researchProjects, appliedProjects } = useMemo(() => {
    const filtered = projects.filter((project) => {
      if (activeFilter === 'All Projects') return true;
      return project.tags.includes(activeFilter);
    });

    return {
      researchProjects: filtered.filter((project) => researchProjectIds.has(project.id)),
      appliedProjects: filtered.filter((project) => !researchProjectIds.has(project.id)),
    };
  }, [activeFilter]);

  const visibleResearch = showAllResearch ? researchProjects : researchProjects.slice(0, 4);
  const visibleApplied = showAllProjects ? appliedProjects : appliedProjects.slice(0, 4);

  return (
    <section id="research" className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-9 w-[3px] bg-[#7f2f2f]" />
          <h2 className="text-4xl text-[#212227]">Research & Projects</h2>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 border-b border-[#d8d9d5] pb-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setShowAllResearch(false);
                setShowAllProjects(false);
              }}
              className={`rounded-sm border px-3 py-1 text-[11px] uppercase tracking-[0.14em] transition-colors ${
                activeFilter === filter
                  ? 'border-[#7f2f2f] bg-[#7f2f2f] text-white'
                  : 'border-[#d5d8dc] bg-white text-[#555f68] hover:border-[#7f2f2f] hover:text-[#7f2f2f]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mb-12">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-3xl text-[#212227]">Research</h3>
            <span className="text-xs uppercase tracking-[0.12em] text-[#6a7078]">{researchProjects.length} items</span>
          </div>

          {researchProjects.length === 0 ? (
            <p className="border-b border-[#e3e5e2] py-5 text-sm text-[#666d76]">No research items match this filter.</p>
          ) : (
            renderProjectCards(visibleResearch)
          )}

          {researchProjects.length > 4 && (
            <button
              onClick={() => setShowAllResearch((prev) => !prev)}
              className="mt-5 inline-flex items-center gap-2 rounded-sm border border-[#d5d8dc] bg-white px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-[#7f2f2f] transition-colors hover:border-[#7f2f2f]"
            >
              {showAllResearch ? 'Show less' : `Show more (${researchProjects.length - 4})`}
              {showAllResearch ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          )}
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-3xl text-[#212227]">Projects</h3>
            <span className="text-xs uppercase tracking-[0.12em] text-[#6a7078]">{appliedProjects.length} items</span>
          </div>

          {appliedProjects.length === 0 ? (
            <p className="border-b border-[#e3e5e2] py-5 text-sm text-[#666d76]">No project items match this filter.</p>
          ) : (
            renderProjectCards(visibleApplied)
          )}

          {appliedProjects.length > 4 && (
            <button
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="mt-5 inline-flex items-center gap-2 rounded-sm border border-[#d5d8dc] bg-white px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-[#7f2f2f] transition-colors hover:border-[#7f2f2f]"
            >
              {showAllProjects ? 'Show less' : `Show more (${appliedProjects.length - 4})`}
              {showAllProjects ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
