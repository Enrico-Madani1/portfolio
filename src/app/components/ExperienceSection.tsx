import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    title: 'Research Assistant',
    organization: 'AI & Me Lab, UChicago',
    date: 'Mar 2026 - Present',
    description:
      "Studying how adding productive friction to ChatGPT interfaces influences how students write, reason, and engage with AI-assisted learning workflows.",
  },
  {
    title: 'Research Assistant',
    organization: 'Urbanism Lab, UChicago',
    date: 'Sep 2024 - Present',
    description:
      'Building computer-vision pipelines for Missing Middle Housing detection and neighborhood-level socioeconomic analysis.',
  },
  {
    title: 'Research Intern',
    organization: 'Center for Spatial Data Science, UChicago',
    date: 'Jun 2025 - Aug 2025',
    description:
      'Developed an adversarial-collaboration chatbot and rubric-based evaluation workflow for student research ideation.',
  },
  {
    title: 'Research Intern',
    organization: 'Summer Institute in Social Science Research',
    date: 'May 2024 - Sep 2024',
    description:
      'Built OpenCV workflows for historical map digitization and performed spatial analyses with QGIS and GeoDa.',
  },
  {
    title: 'Design & Marketing Manager',
    organization: 'PERMIAS Chicago',
    date: 'Aug 2023 - May 2025',
    description:
      'Led visual strategy and communications for an Indonesian student organization, increasing engagement across channels.',
  },
];

const honors = [
  {
    title: 'Faculty Favorite Award',
    organization: 'Data Ethics Poster Session',
    date: 'Fall 2025',
  },
  {
    title: 'Odyssey Scholar',
    organization: 'University of Chicago',
    date: '2023-2027',
  },
  {
    title: "Dean's List",
    organization: 'University of Chicago',
    date: '2023-2024',
  },
  {
    title: 'Silver Medalist',
    organization: 'Hong Kong International Mathematical Olympiad',
    date: '2021',
  },
];

const education = [
  {
    degree: 'B.S. Data Science / B.A. Economics',
    school: 'University of Chicago',
    date: 'Expected June 2027',
    gpa: '3.9/4.0',
  },
  {
    degree: 'Science Track Diploma',
    school: 'Pradita Dirgantara High School',
    date: 'Graduated June 2022',
    gpa: '97.25/100',
  },
];

export function ExperienceSection() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const visibleExperience = showAllExperience ? experiences : experiences.slice(0, 3);

  return (
    <section id="experience" className="bg-[#f6f6f4] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-9 w-[3px] bg-[#7f2f2f]" />
          <h2 className="text-4xl text-[#212227]">Experience & Education</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.16em] text-[#6a7078]">Research Experience</h3>
            <div className="space-y-1">
              {visibleExperience.map((exp) => (
                <article key={`${exp.title}-${exp.date}`} className="border-b border-[#dfe1dd] py-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-xl text-[#212227]">{exp.title}</h4>
                    <span className="text-xs uppercase tracking-[0.12em] text-[#6a7078]">{exp.date}</span>
                  </div>
                  <p className="text-sm text-[#555f68]">{exp.organization}</p>
                  <p className="mt-1 text-sm text-[#30343b]">{exp.description}</p>
                </article>
              ))}
            </div>

            {experiences.length > 3 && (
              <button
                onClick={() => setShowAllExperience((prev) => !prev)}
                className="mt-4 inline-flex items-center gap-2 rounded-sm border border-[#d5d8dc] bg-white px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-[#7f2f2f] hover:border-[#7f2f2f]"
              >
                {showAllExperience ? 'Show less' : `Show more (${experiences.length - 3})`}
                {showAllExperience ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              </button>
            )}
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="mb-3 text-xs uppercase tracking-[0.16em] text-[#6a7078]">Education</h3>
              <div className="space-y-1 border-t border-[#dfe1dd]">
                {education.map((edu) => (
                  <article key={`${edu.degree}-${edu.date}`} className="border-b border-[#dfe1dd] py-4">
                    <h4 className="text-lg text-[#212227]">{edu.degree}</h4>
                    <p className="text-sm text-[#555f68]">{edu.school}</p>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#6a7078]">{edu.date}</p>
                    <p className="mt-1 text-sm text-[#30343b]">GPA: {edu.gpa}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xs uppercase tracking-[0.16em] text-[#6a7078]">Honors</h3>
              <ul className="space-y-2 border-t border-[#dfe1dd] pt-3">
                {honors.map((honor) => (
                  <li key={`${honor.title}-${honor.date}`} className="flex items-start justify-between gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-[#212227]">{honor.title}</p>
                      <p className="text-[#555f68]">{honor.organization}</p>
                    </div>
                    <span className="shrink-0 text-xs uppercase tracking-[0.12em] text-[#6a7078]">{honor.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
