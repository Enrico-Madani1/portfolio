import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Research', id: 'research' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current?.id) {
        setActiveSection(current.id);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#d8d9d5] bg-[#f9f9f7]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollToSection('about')}
          className="font-serif text-xl text-[#212227] transition-colors hover:text-[#7f2f2f]"
        >
          Enrico Madani
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`border-b pb-1 text-xs uppercase tracking-[0.18em] transition-colors ${
                activeSection === item.id
                  ? 'border-[#7f2f2f] text-[#7f2f2f]'
                  : 'border-transparent text-[#525965] hover:text-[#7f2f2f]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-[#d8d9d5] bg-[#f9f9f7] px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full py-2 text-left text-xs uppercase tracking-[0.16em] ${
                activeSection === item.id ? 'text-[#7f2f2f]' : 'text-[#525965]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
