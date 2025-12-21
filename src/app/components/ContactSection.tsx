import { motion } from 'motion/react';
import { useState } from 'react';
import { useInView } from './hooks/useInView';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, Github, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! (Demo mode)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl mb-12 text-gray-900 uppercase tracking-wide">
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Interested in collaborating on research projects related to human-AI interaction, 
                  algorithmic fairness, or urban data science.
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Email</p>
                    <a href="mailto:enrico@uchicago.edu" className="text-gray-900 hover:text-red-600">
                      enrico@uchicago.edu
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Location</p>
                    <p className="text-gray-900">Chicago, Illinois</p>
                  </div>
                </div>

                <div className="flex gap-4">
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
                    href="#"
                    className="text-gray-600 hover:text-red-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-xs uppercase tracking-wide text-gray-500">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 border-gray-300 focus:border-red-600"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-xs uppercase tracking-wide text-gray-500">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 border-gray-300 focus:border-red-600"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-xs uppercase tracking-wide text-gray-500">
                    Subject
                  </Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  >
                    <SelectTrigger className="mt-1 border-gray-300 focus:border-red-600">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="collaboration">Research Collaboration</SelectItem>
                      <SelectItem value="internship">Internship Opportunity</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-xs uppercase tracking-wide text-gray-500">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1 border-gray-300 focus:border-red-600"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white uppercase tracking-wide"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
