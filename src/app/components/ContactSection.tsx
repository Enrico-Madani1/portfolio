import { Mail, Github, Linkedin, FileText, ExternalLink } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-9 w-[3px] bg-[#7f2f2f]" />
          <h2 className="text-4xl text-[#212227]">Contact</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            <p className="max-w-3xl text-base text-[#30343b]">
              I am always open to research collaborations, student projects, and conversations around
              human-centered AI, fairness, privacy, and urban analytics.
            </p>

            <div className="mt-5 space-y-3 border-l-2 border-[#7f2f2f] pl-4">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#6a7078]">Email</p>
                <a href="mailto:enrico@uchicago.edu" className="text-sm text-[#212227] hover:text-[#7f2f2f]">
                  enrico@uchicago.edu
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#6a7078]">Resume</p>
                <a
                  href="/paper/resume(EnricoMadani).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[#212227] hover:text-[#7f2f2f]"
                >
                  View CV <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <aside className="rounded-sm border border-[#d8d9d5] bg-[#f9f9f7] p-5">
            <h3 className="text-xl text-[#212227]">Professional Links</h3>
            <p className="mt-2 text-sm text-[#555f68]">
              Best way to reach me is email. You can also find project code and updates here.
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <a
                href="mailto:enrico@uchicago.edu"
                className="inline-flex items-center gap-2 text-[#212227] hover:text-[#7f2f2f]"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://github.com/Enrico-Madani1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#212227] hover:text-[#7f2f2f]"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/enrico-madani/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#212227] hover:text-[#7f2f2f]"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="/paper/resume(EnricoMadani).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#212227] hover:text-[#7f2f2f]"
              >
                <FileText className="h-4 w-4" /> Resume
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
