import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { ProjectDetail } from './components/ProjectDetail';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}
