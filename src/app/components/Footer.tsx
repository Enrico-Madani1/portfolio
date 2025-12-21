import { Mail, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Name & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              © 2025 Enrico Madani
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="mailto:enrico@uchicago.edu"
              className="text-gray-400 hover:text-red-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Enrico-Madani1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Last Updated */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Last Updated: Dec 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
