import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function ExperienceSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const experiences = [
    {
      title: 'Research Assistant',
      organization: 'Urbanism Lab, UChicago',
      date: 'Sep 2024 - Present',
      description: 'Computer vision applications for urban spatial research, focusing on Missing Middle Housing detection and socioeconomic analysis with Prof. Emily Talen.',
    },
    {
      title: 'Research Intern',
      organization: 'Center for Spatial Data Science, UChicago',
      date: 'Jun 2025 - Aug 2025',
      description: 'Developed AI adversarial collaborator chatbot for improving research question quality, implementing rubric-based evaluation and guardrail mechanisms.',
    },
    {
      title: 'Research Fellow',
      organization: 'Summer Institute in Social Science Research',
      date: 'May 2024 - Sep 2024',
      description: 'Built AI algorithm for historical map digitization and conducted spatial analysis of Illinois street infrastructure using QGIS and GeoDa.',
    },
    {
      title: 'Design & Marketing Manager',
      organization: 'PERMIAS Chicago',
      date: 'Aug 2023 - May 2025',
      description: 'Led social media strategy, improved engagement metrics, and designed marketing materials for Indonesian student organization.',
    },
  ];

  const honors = [
    {
      title: 'Faculty Favorite Award',
      organization: 'Data Ethics Poster Session',
      date: 'Fall 2025',
      description: 'Selective Differential Privacy for Fair Machine Learning',
    },
    {
      title: 'Odyssey Scholar',
      organization: 'University of Chicago',
      date: '2023-2027',
      description: 'Merit-based scholarship for academic excellence',
    },
    {
      title: "Dean's List",
      organization: 'University of Chicago',
      date: '2023-24',
      description: 'GPA: 3.9/4.0',
    },
    {
      title: 'Silver Medalist',
      organization: 'Hong Kong International Mathematical Olympiad',
      date: '2021',
      description: 'International mathematics competition',
    },
  ];

  const education = [
    {
      degree: 'B.S. Data Science / B.A. Economics',
      school: 'University of Chicago',
      location: 'Chicago, Illinois',
      date: 'Expected June 2027',
      gpa: '3.9/4.0',
      coursework: 'Machine Learning, Statistical Methods, Linear Algebra, Computer Vision, Data Ethics',
    },
    {
      degree: 'Science Track Diploma',
      school: 'Pradita Dirgantara High School',
      location: 'Boyolali, Indonesia',
      date: 'Graduated June 2022',
      gpa: '97.25/100',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-12 text-gray-900 uppercase tracking-wide">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="border-l-2 border-gray-200 pl-6 hover:border-red-600 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                  <h3 className="text-lg text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-500">{exp.date}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{exp.organization}</p>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Honors & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-12 text-gray-900 uppercase tracking-wide">
            Honors & Awards
          </h2>

          <div className="space-y-6">
            {honors.map((honor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="border-l-2 border-gray-200 pl-6 hover:border-red-600 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                  <h3 className="text-lg text-gray-900">{honor.title}</h3>
                  <span className="text-sm text-gray-500">{honor.date}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{honor.organization}</p>
                <p className="text-sm text-gray-700">{honor.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl mb-12 text-gray-900 uppercase tracking-wide">
            Education
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                className="border-l-2 border-gray-200 pl-6 hover:border-red-600 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                  <h3 className="text-lg text-gray-900">{edu.degree}</h3>
                  <span className="text-sm text-gray-500">{edu.date}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {edu.school} • {edu.location}
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  <span className="text-gray-500">GPA:</span> {edu.gpa}
                </p>
                {edu.coursework && (
                  <p className="text-sm text-gray-700">
                    <span className="text-gray-500">Coursework:</span> {edu.coursework}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
