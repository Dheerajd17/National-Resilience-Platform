import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { SearchIcon } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ServiceCategories from './components/ServiceCategories';
import ProjectDetails from './components/ProjectDetails';
import FinancialContribution from './components/FinancialContribution';
import EngineerContribution from './components/EngineerContribution';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import PaymentGateway from './components/PaymentGateway';
import { projects } from './data';
import HomePage from './components/HomePage';
import { useState } from 'react';
import ProjectsPage from './components/ProjectsPage';
import PostProject from './components/PostProject';

function App() {
  const [activeTab, setActiveTab] = React.useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeCategory, setActiveCategory] = useState('All Categories');

  const categories = [
    'All Categories',
    'Web Development',
    'Mobile Apps',
    'AI/ML',
    'DevOps'
  ];

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'All Categories') {
      setFilteredProjects(projects);
      return;
    }

    const filtered = projects.filter(project => 
      project.skills.some(skill => skill.toLowerCase() === category.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query) {
      setFilteredProjects(projects);
      return;
    }

    const searchLower = query.toLowerCase();
    
    // Sort projects based on relevance
    const sortedProjects = projects
      .map(project => {
        // Calculate relevance score
        let score = 0;
        
        // Highest priority for "Project Contributions" match
        if (project.title.toLowerCase().includes('project contribution') ||
            project.description.toLowerCase().includes('project contribution')) {
          score += 100;
        }
        
        // Regular matches
        if (project.title.toLowerCase().includes(searchLower)) {
          score += 50;
        }
        if (project.description.toLowerCase().includes(searchLower)) {
          score += 25;
        }
        if (project.skills.some(skill => skill.toLowerCase().includes(searchLower))) {
          score += 10;
        }

        return { ...project, score };
      })
      .filter(project => project.score > 0)
      .sort((a, b) => b.score - a.score);

    setFilteredProjects(sortedProjects);
  };

  const handleScrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      // Add event listener to scroll after page load
      window.addEventListener('load', () => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, { once: true }); // Remove listener after first execution
    } else {
      // If already on home page, just scroll
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/projects" 
            element={
              <ProjectsPage 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filteredProjects={filteredProjects}
                handleSearch={handleSearch}
                activeCategory={activeCategory}
                handleCategoryFilter={handleCategoryFilter}
                categories={categories}
              />
            } 
          />
          <Route path="/post-project" element={<PostProject />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/project/:id/financial" element={<FinancialContribution />} />
          <Route path="/project/:id/engineer" element={<EngineerContribution />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
          <Route path="/services" element={<ServiceCategories />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <p className="text-gray-400">Connecting talented professionals with exciting opportunities.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <button
                      onClick={() => handleScrollToSection('how-it-works')}
                      className="hover:text-white transition-colors duration-300"
                    >
                      How it Works
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleScrollToSection('success-stories')}
                      className="hover:text-white transition-colors duration-300"
                    >
                      Success Stories
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <button
                      onClick={() => handleScrollToSection('help-center')}
                      className="hover:text-white transition-colors duration-300"
                    >
                      Help Center
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleScrollToSection('terms-of-service')}
                      className="hover:text-white transition-colors duration-300"
                    >
                      Terms of Service
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleScrollToSection('privacy-policy')}
                      className="hover:text-white transition-colors duration-300"
                    >
                      Privacy Policy
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Email: contact@example.com</li>
                  <li>Phone: (555) 123-45678</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;