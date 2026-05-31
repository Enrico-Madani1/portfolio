import { Mail, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#d8d9d5] bg-[#f6f6f4] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 text-xs uppercase tracking-[0.12em] text-[#6a7078] md:flex-row md:items-center">
        <p>© 2026 Enrico Madani</p>

        <div className="flex items-center gap-3 text-[#6a7078]">
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
        </div>

        <p>Updated May 2026</p>
      </div>
    </footer>
  );
}
