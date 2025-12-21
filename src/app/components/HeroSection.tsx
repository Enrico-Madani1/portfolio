import { motion } from "motion/react";
import { Mail, Github, Linkedin } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-white">
      <div className="max-w-5xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Headshot - Smaller */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <img
              src="/images/headshot.jpg"
              alt="Enrico Madani"
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl mb-2 text-gray-900 tracking-tight">
              Enrico Madani
            </h1>
            <p className="text-lg text-gray-600 mb-6 uppercase tracking-wide">
              Data Science & Economics / ML & AI Researcher
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl">
              Third-year undergraduate at the University of
              Chicago. Research in human-AI collaboration,
              algorithmic fairness, and machine learning
              applications to urban and social challenges.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-6 justify-center md:justify-start text-sm">
              <div>
                <span className="text-gray-500 uppercase tracking-wide">
                  GPA:
                </span>{" "}
                <span className="text-gray-900">3.9/4.0</span>
              </div>
              <div>
                <span className="text-gray-500 uppercase tracking-wide">
                  Status:
                </span>{" "}
                <span className="text-gray-900">
                  Odyssey Scholar
                </span>
              </div>
              <div>
                <span className="text-gray-500 uppercase tracking-wide">
                  Location:
                </span>{" "}
                <span className="text-gray-900">
                  Chicago, IL
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 justify-center md:justify-start mb-6">
              <a
                href="mailto:enrico@uchicago.edu"
                className="text-gray-600 hover:text-red-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Enrico-Madani1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/enrico-madani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Links */}
            <div className="flex flex-wrap gap-4 text-sm justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("research")}
                className="text-red-600 hover:text-red-700 uppercase tracking-wide border-b border-red-600"
              >
                View Research
              </button>
              <a
                href="/paper/resume(EnricoMadani).pdf"  
                target="_blank"
                rel="noopener noreferrer"
                download="resume(EnricoMadani).pdf"  
                className="text-red-600 hover:text-red-700 uppercase tracking-wide border-b border-red-600"
              >
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-red-600 hover:text-red-700 uppercase tracking-wide border-b border-red-600"
              >
                Contact
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}