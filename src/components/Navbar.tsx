import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BriefcaseIcon, CodeIcon, MenuIcon } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <CodeIcon className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              National Resilience Platform
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => setActiveTab('projects')}
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
              onClick={() => setActiveTab('services')}
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

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="hidden md:block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign Up
            </Link>
            <button className="md:hidden">
              <MenuIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
