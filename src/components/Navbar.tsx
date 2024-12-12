import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BriefcaseIcon, CodeIcon, MenuIcon, X, Shield, Globe2, Network, Cpu, Server, Layers, Building2, CircuitBoard, CloudCog, Combine, Container, Factory, FileCode2, GitFork, HardDrive, Hexagon, LayoutGrid, LineChart, Power, Radio, Radar, Satellite, Scale, Share2, ShieldCheck, TreePine, Unplug, Workflow, Zap } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setActiveTab('');
    navigate('/');
    window.scrollTo(0, 0);
  };

  const handleNavigation = (tab: string): void => {
    setActiveTab(tab);
    if (tab === 'projects') {
      navigate('/projects');
    } else if (tab === 'services') {
      navigate('/services');
    }
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 cursor-pointer w-1/4"
          >
            <ShieldCheck className="h-8 w-8 text-gray-900" />
            <span className="text-xl font-bold text-blue-600">
              NRP
            </span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex space-x-8 justify-center flex-1">
            <button
              onClick={() => handleNavigation('projects')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                activeTab === 'projects'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <BriefcaseIcon className="h-5 w-5" />
              <span>Project Contributions</span>
            </button>
            <button
              onClick={() => handleNavigation('services')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                activeTab === 'services'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <CodeIcon className="h-5 w-5" />
              <span>Software Services</span>
            </button>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4 w-1/4 justify-end">
            <Link
              to="/login"
              className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
            <div className="flex flex-col py-2">
              <button
                onClick={() => handleNavigation('projects')}
                className={`flex items-center space-x-2 px-4 py-3 ${
                  activeTab === 'projects'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <BriefcaseIcon className="h-5 w-5" />
                <span>Project Contributions</span>
              </button>
              <button
                onClick={() => handleNavigation('services')}
                className={`flex items-center space-x-2 px-4 py-3 ${
                  activeTab === 'services'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <CodeIcon className="h-5 w-5" />
                <span>Software Services</span>
              </button>
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
