import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function AboutSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const interests = [
    "Human-AI Interaction",
    "Differential Privacy",
    "Computer Vision",
    "Urban Analytics",
    "Educational Technology",
    "ML for Social Good",
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl mb-12 text-gray-900 uppercase tracking-wide">
            About
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Bio */}
            <div className="border-l-2 border-red-600 pl-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Hi, I am Enrico, an undergraduate student at
                UChicago majoring in Data Science and Economics.
                I am passionate about using data science to
                address real social challenges.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My research focuses on fairness, transparency,
                and human-centered AI design across three main
                areas: Human-AI Collaboration (building
                interactive chatbot that enhance rather than
                replace human reasoning), Algorithmic Fairness &
                Privacy (exploring Selective DP-SGD),
                and Urban/Spatial Data Science (using computer
                vision and spatial analysis to understand middle
                housing distribution and pattern).
              </p>
            </div>

            {/* Award Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <img
                src="/images/IMG_8752.jpg"
                alt="Enrico Madani at Data Ethics Poster Session - Faculty Favorite Award Winner"
                className="w-full h-auto border-2 border-gray-200 object-cover"
              />
              <p className="text-xs text-gray-500 uppercase tracking-wide text-center">
                Faculty Favorite Award - Data Ethics Poster Session Fall 2025
              </p>
            </motion.div>
          </div>

          {/* Research Interests */}
          <div>
            <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-4">
              Research Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 bg-white border border-gray-300 text-gray-700"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}