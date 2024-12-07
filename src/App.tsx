import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  const [activeTab, setActiveTab] = React.useState('projects');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/project/:id/financial" element={<FinancialContribution />} />
          <Route path="/project/:id/engineer" element={<EngineerContribution />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
          <Route path="/" element={
            <main className="container mx-auto px-4 py-8">
              {/* Hero Section */}
              <section className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {activeTab === 'projects' ? 'Find Projects to Contribute' : 'Software Services'}
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {activeTab === 'projects' 
                    ? 'Connect with employers and contribute to exciting projects worldwide.'
                    : 'Discover comprehensive software solutions for your business needs.'}
                </p>

                {activeTab === 'projects' && (
                  <button
                    onClick={() => {/* Add post project logic */}}
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-flex items-center space-x-2"
                  >
                    <span>Post a Project</span>
                  </button>
                )}
                
                {/* Search Bar */}
                <div className="mt-8 max-w-2xl mx-auto">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder={`Search ${activeTab === 'projects' ? 'projects' : 'services'}...`}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* Content */}
              {activeTab === 'projects' ? (
                <>
                  {/* Filters */}
                  <div className="mb-8 flex flex-wrap gap-4">
                    <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200">
                      All Categories
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                      Web Development
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                      Mobile Apps
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                      AI/ML
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                      DevOps
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </>
              ) : (
                <ServiceCategories />
              )}
            </main>
          } />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <p className="text-gray-400">Connecting talented professionals with exciting opportunities worldwide.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">How it Works</a></li>
                  <li><a href="#" className="hover:text-white">Success Stories</a></li>
                  <li><a href="#" className="hover:text-white">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Help Center</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Email: contact@example.com</li>
                  <li>Phone: (555) 123-4567</li>
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