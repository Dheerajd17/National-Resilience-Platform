import React , { useEffect }from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './components/Navbar';
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
import ApplicationsList from './components/Applications/ApplicationsList';
import NewsPage from './components/NewsPage';
import AuthCheck from './utils/AuthCheck';
import Profile from './components/Profile';
import { useAuthContext } from './context/AuthContext';

// Create a BackButton component
const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const showBackButton = location.pathname !== '/';

  const handleBack = () => {
    navigate(-1);
  };

  if (!showBackButton) return null;

  return (
    <button
      onClick={handleBack}
      className="fixed top-4 left-4 z-50 p-3 bg-white rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300 group"
      aria-label="Go back"
    >
      <ArrowLeft className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
    </button>
  );
};

// Create a wrapper component to handle the categoryId parameter
const ApplicationsListWrapper = () => {
  const { categoryId } = useParams();
  return <ApplicationsList categoryId={categoryId || ''} />;
};

function App() {
  const [activeTab, setActiveTab] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const { user, login } = useAuthContext();

  const categories = [
    'All Categories',
    'Web Development',
    'Mobile Apps',
    'AI/ML',
    'DevOps'
  ];

  useEffect(()=>{
    console.log("App effect")
    // login({fullname: "Sanjay",email: "xyz@gmail.com"});
    if(user){
      login(user);
    }
  },[])


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
      // Reduced timeout from 100ms to 50ms
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'  // Added to ensure consistent scrolling
        });
      }, 50); // Reduced from 100ms
    } else {
      // If already on home page, just scroll
      // Reduced timeout from 100ms to 50ms
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'  // Added to ensure consistent scrolling
        });
      }, 50); // Reduced from 100ms
    }
  };

  return (
    
    <Router>
      <div className="min-h-screen bg-gray-50">
        <BackButton />
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
          <Route path="/post-project" element={
            <AuthCheck authentication={true}>
              <PostProject />
            </AuthCheck>
            } />
          <Route path="/login" element={
            <AuthCheck authentication={false}>
              <Login />
            </AuthCheck>
          } />
          <Route path="/signup" element={
            <AuthCheck authentication={false}>
              <SignUp />
            </AuthCheck>
          } />
          <Route path="/profile" element={
            <AuthCheck authentication={true}>
              <Profile />
            </AuthCheck>
            } />

          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/project/:id/financial" element={
            <AuthCheck authentication={true}>
              <FinancialContribution />
            </AuthCheck>
            } />
          <Route path="/project/:id/engineer" element={
            <AuthCheck authentication={true}>
              <EngineerContribution />
            </AuthCheck>
            } />
          <Route path="/payment-gateway" element={
            <AuthCheck authentication={true}>
              <PaymentGateway />
            </AuthCheck>
            } />
          <Route path="/services" element={<ServiceCategories />} />
          <Route path="/services/:categoryId/applications" element={
            <AuthCheck authentication={true}>
              <ApplicationsListWrapper />
            </AuthCheck>
            } />
          <Route path="/news" element={<NewsPage />} />
        </Routes>

        

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <button
                  onClick={() => handleScrollToSection('about-platform')}
                  className="w-full text-left hover:text-white transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold mb-4">About Us</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <p className="text-left">Connecting talented professionals with exciting opportunities.</p>
                    </li>
                  </ul>
                </button>
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
                  <li>
                    <button
                      onClick={() => handleScrollToSection('news')}
                      className="hover:text-white transition-colors duration-300"
                    >
                      Latest Updates
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
                  <li>Email: nrp.india.org@gmail.com</li>
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