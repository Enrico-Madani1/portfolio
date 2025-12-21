import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Github, ExternalLink, FileText, Youtube } from 'lucide-react';
import { Button } from './ui/button';

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-white">
        <div className="text-center">
          <h1 className="text-2xl text-gray-900 mb-4 uppercase tracking-wide">Project Not Found</h1>
          <Link to="/" className="text-red-600 hover:text-red-700 uppercase tracking-wide border-b border-red-600">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 uppercase tracking-wide mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.award && (
              <span className="inline-block text-xs bg-red-600 text-white px-2 py-1 uppercase tracking-wide mb-4">
                {project.award}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl text-gray-900 mb-4 tracking-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="uppercase tracking-wide">{project.institution}</span>
              <span>•</span>
              <span className="uppercase tracking-wide">{project.date}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-white border border-gray-300 text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-red-600 border border-gray-300 hover:border-red-600 px-4 py-2 transition-colors uppercase tracking-wide"
            >
              <Github className="w-4 h-4" />
              GitHub Repository
            </a>
          )}
          {project.paperUrl && (
            <a
              href={project.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-red-600 border border-gray-300 hover:border-red-600 px-4 py-2 transition-colors uppercase tracking-wide"
            >
              <FileText className="w-4 h-4" />
              View Paper
            </a>
          )}
          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-red-600 border border-gray-300 hover:border-red-600 px-4 py-2 transition-colors uppercase tracking-wide"
            >
              <Youtube className="w-4 h-4" />
              Watch Video
            </a>
          )}
        </motion.div>

        {/* Introduction */}
        {project.introduction && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl text-gray-900 uppercase tracking-wide mb-6">
              Introduction
            </h2>
            <div className="border-l-2 border-red-600 pl-6">
              <p className="text-gray-700 leading-relaxed">
                {project.introduction}
              </p>
            </div>
          </motion.section>
        )}

        {/* Project Image */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-[400px] object-cover border-2 border-gray-200"
          />
        </motion.section>

        {/* Key Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl text-gray-900 uppercase tracking-wide mb-6">
            Key Highlights
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start border-l-2 border-gray-200 hover:border-red-600 pl-6 py-2 transition-colors">
                <span className="text-red-600 mr-3">→</span>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Poster */}
        {project.posterImage && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl text-gray-900 uppercase tracking-wide mb-6">
              Research Poster
            </h2>
            <div className="border-2 border-gray-200 bg-white">
              <img 
                src={project.posterImage} 
                alt={`${project.title} Poster`}
                className="w-full h-auto"
              />
            </div>
            {project.posterUrl && (
              <div className="mt-4 text-center">
                <a
                  href={project.posterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-red-600 hover:text-red-700 uppercase tracking-wide border-b border-red-600"
                >
                  <ExternalLink className="w-4 h-4" />
                  Download Full Resolution Image
                </a>
              </div>
            )}
          </motion.section>
        )}

        {/* YouTube Video */}
        {project.youtubeUrl && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl text-gray-900 uppercase tracking-wide mb-6">
              Project Video
            </h2>
            <div className="border-2 border-gray-200 bg-black aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={project.youtubeUrl.replace('watch?v=', 'embed/')}
                title={`${project.title} - Project Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.section>
        )}

        {/* Skills & Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl text-gray-900 uppercase tracking-wide mb-6">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, i) => (
              <span
                key={i}
                className="text-sm px-3 py-2 bg-white border border-gray-300 text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Back to Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex justify-center pt-8 border-t border-gray-200"
        >
          <Link to="/">
            <Button className="bg-red-600 hover:bg-red-700 text-white uppercase tracking-wide">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}