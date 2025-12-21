import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from './hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export function ResearchSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filters = [
    'All Projects',
    'Human-AI Collaboration',
    'Fairness & Privacy',
    'Urban Data Science',
    'Computer Vision',
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All Projects') return true;
    return project.tags.includes(activeFilter);
  });

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl mb-12 text-gray-900 uppercase tracking-wide">
            Research
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200 pb-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs uppercase tracking-wide px-3 py-1 transition-colors ${
                  activeFilter === filter
                    ? 'bg-red-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-red-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project List */}
          <div className="space-y-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="border-l-2 border-gray-200 pl-6 hover:border-red-600 transition-colors group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <Link to={`/project/${project.id}`}>
                      <h3 className="text-xl text-gray-900 mb-1 group-hover:text-red-600 transition-colors cursor-pointer">
                        {project.title}
                        {project.award && (
                          <span className="ml-3 text-xs bg-red-600 text-white px-2 py-1 uppercase tracking-wide">
                            {project.award}
                          </span>
                        )}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-600">
                      {project.institution} • {project.date}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      to={`/project/${project.id}`}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                      title="View Details"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-600 transition-colors"
                        title="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 mb-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-600 mr-2">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags & Skills */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Details Link */}
                <Link 
                  to={`/project/${project.id}`}
                  className="inline-block text-sm text-red-600 hover:text-red-700 uppercase tracking-wide border-b border-red-600"
                >
                  View Full Details →
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
