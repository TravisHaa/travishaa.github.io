import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectDetail } from './components/ProjectDetail';
import { Footer } from './components/Footer';

type Page = 'home' | 'projects' | 'project-detail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleNavigate = (page: 'home' | 'projects') => {
    setCurrentPage(page);
    setSelectedProjectId(null);
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentPage('project-detail');
  };

  const handleBackToProjects = () => {
    setCurrentPage('projects');
    setSelectedProjectId(null);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navigation 
        currentPage={currentPage === 'project-detail' ? 'projects' : currentPage}
        onNavigate={handleNavigate}
      />
      
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'projects' && <ProjectsPage onProjectClick={handleProjectClick} />}
      {currentPage === 'project-detail' && selectedProjectId && (
        <ProjectDetail projectId={selectedProjectId} onBack={handleBackToProjects} />
      )}
      
      <Footer 
        currentPage={currentPage === 'project-detail' ? 'projects' : currentPage}
        onNavigate={handleNavigate}
      />
    </div>
  );
}