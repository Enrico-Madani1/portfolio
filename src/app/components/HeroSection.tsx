import { Mail, Github, Linkedin, FileText } from 'lucide-react';

const interests = [
  'Human-AI Collaboration',
  'Algorithmic Fairness',
  'Differential Privacy',
  'Urban Data Science',
  'Computer Vision',
  'Public-Interest AI',
];

export function HeroSection() {
  return (
    <section id="about" className="bg-[#f6f6f4] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[230px_minmax(0,1fr)]">
          <aside className="space-y-4">
            <img
              src="/images/headshot.jpg"
              alt="Enrico Madani"
              className="h-56 w-56 max-w-full rounded-sm object-cover shadow-sm"
            />

            <div className="space-y-2 border-l-2 border-[#7f2f2f] pl-4 text-sm">
              <p className="text-xs uppercase tracking-[0.14em] text-[#6a7078]">Email</p>
              <a
                href="mailto:enrico@uchicago.edu"
                className="block text-[#212227] transition-colors hover:text-[#7f2f2f]"
              >
                enrico@uchicago.edu
              </a>
              <p className="pt-1 text-xs uppercase tracking-[0.14em] text-[#6a7078]">Location</p>
              <p className="text-[#212227]">Chicago, Illinois</p>
            </div>

            <div className="flex items-center gap-3 text-[#666d76]">
              <a href="mailto:enrico@uchicago.edu" className="hover:text-[#7f2f2f]" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Enrico-Madani1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7f2f2f]"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/enrico-madani/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7f2f2f]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="/paper/resume(EnricoMadani).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7f2f2f]"
                aria-label="Resume"
              >
                <FileText className="h-4 w-4" />
              </a>
            </div>
          </aside>

          <div className="space-y-6">
            <header className="border-b border-[#d8d9d5] pb-5">
              <h1 className="text-4xl text-[#212227] sm:text-5xl">Enrico Madani</h1>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[#5d6670]">
                Data Science & Economics • University of Chicago
              </p>
            </header>

            <p className="max-w-3xl text-base text-[#30343b]">
              I study how machine learning systems can better support human decision-making in education,
              urban policy, and socially sensitive settings. My work focuses on human-AI interaction,
              urban/spatial data science, and questions in education and public policy.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#6a7078]">Current Role</p>
                <p className="mt-1 text-sm text-[#212227]">Undergraduate Researcher at UChicago</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#6a7078]">Research Areas</p>
                <p className="mt-1 text-sm text-[#212227]">AI + Society, Fairness, Urban Analytics</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#6a7078]">Academic Snapshot</p>
                <p className="mt-1 text-sm text-[#212227]">GPA 3.9/4.0 • Odyssey Scholar</p>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[#6a7078]">Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="rounded-sm border border-[#d5d8dc] bg-white px-2.5 py-1 text-xs text-[#555f68]">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
