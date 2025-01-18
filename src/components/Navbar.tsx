import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CodeIcon, MenuIcon, X, ShieldCheck, FolderGit2, CircleUser, UserRoundPen, LogOut} from 'lucide-react';
import { useAuthContext } from '../context/AuthContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

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
    }else if (tab === 'profile') {
      navigate('/profile');
    }
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };
  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg relative" >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 relative">
          {/* Logo - Absolute positioned to the left */}
          <div 
            onClick={handleLogoClick}
            className="absolute left-4 flex items-center space-x-2 cursor-pointer"
          >
            <ShieldCheck className="h-8 w-8 text-gray-900" />
            <span className="text-xl font-bold text-blue-600">
              NRP
            </span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavigation('projects')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md font-bold ${
                activeTab === 'projects'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-100'
              }`}
            >
              <FolderGit2 className="h-6 w-6" />
              <span>Project Contributions</span>
            </button>
            <button
              onClick={() => handleNavigation('services')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md font-bold ${
                activeTab === 'services'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-100'
              }`}
            >
              <CodeIcon className="h-6 w-6" />
              <span>Software Services</span>
            </button>
          </div>

          {/* Desktop Auth Buttons - Absolute positioned to the right */}
          <div className="hidden md:flex items-center space-x-4 absolute right-4">
          {isAuthenticated ? (
              <div className="relative">
                <CircleUser
                  className="h-8 w-8 hover:text-blue-700 cursor-pointer opacity-70 hover:opacity-100" 
                  onClick={handleProfileClick}
                />
                {isProfileMenuOpen && (
                  <div className="absolute rounded-md right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50 " >
                    <Link
                      to="/profile"
                      className="text-gray-900 rounded-md hover:text-blue-600 hover:bg-blue-100 flex px-4 py-2 items-center basis-1/4"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <UserRoundPen className="h-6 w-6 basis-1/4"/>
                      Profile
                    </Link>
                    <button
                      onClick={logout}
                      className="flex w-full rounded-md text-left px-4 py-2 items-center basis-1/4 text-gray-900 hover:text-blue-600 hover:bg-blue-100"
                    >
                      <LogOut className="h-6 w-6 basis-1/4"/>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )  : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md font-bold"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-bold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button - Absolute positioned to the right */}
          <button 
            className="md:hidden absolute right-4"
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
                className={`flex items-center space-x-2 px-4 py-3 font-bold ${
                  activeTab === 'projects'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-100'
                }`}
              >
                <FolderGit2 className="h-6 w-6" />
                <span>Project Contributions</span>
              </button>
              <button
                onClick={() => handleNavigation('services')}
                className={`flex items-center space-x-2 px-4 py-3 font-bold ${
                  activeTab === 'services'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-100'
                }`}
              >
                <CodeIcon className={"h-6 w-6"} />
                <span>Software Services</span>
              </button>
              {isAuthenticated ? (
                <div className="relative">
                    <button
                      className={`flex w-full items-center space-x-2 px-4 py-3 font-bold ${
                      activeTab === 'profile'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-100'
                  }`}
                  onClick={() => handleNavigation('profile')}
                >
                  <CircleUser className="h-6 w-6" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={logout}
                  className={'flex w-full space-x-2 font-bold px-4 py-3 items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100'}
                >
                  <LogOut className="h-6 w-6 space-x-3"/>
                  <span>Logout</span>  
                </button>
              </div>
              ) : (
                <div className="flex flex-col py-4 px-4 ">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-bold"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-bold"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;