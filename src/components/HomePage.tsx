import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Users, Globe, Lightbulb, CheckCircle, Target, Award, MessageSquare, LifeBuoy, Newspaper } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Remove the '#' from the hash
      const sectionId = window.location.hash.slice(1);
      // Scroll to the section after a short delay to ensure DOM is ready
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const handleSignUpClick = () => {
    navigate('/signup');
    window.scrollTo(0, 0);
  };

  const handleBrowseProjects = () => {
    navigate('/projects');
    // Add a small delay to ensure navigation completes before focusing
    setTimeout(() => {
      const searchInput = document.querySelector('input[placeholder="Search projects..."]') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
      }
    }, 100);
  };

  const handleChooseContribution = () => {
    navigate('/projects');
    // Add a small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const projectCards = document.querySelector('.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3');
      if (projectCards) {
        projectCards.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSubmitProposal = () => {
    navigate('/post-project');
    window.scrollTo(0, 0);
  };

  const handleStartContributing = () => {
    navigate('/projects');
    window.scrollTo(0, 0);
  };

  const handleViewAllNews = () => {
    navigate('/news');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Hero Section -Modified to remove the button */}
      <div className="bg-gradient-to-b from-blue-100 to-[#f9fafb]">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">N</span>ational{' '}
              <span className="text-blue-600">R</span>esilience{' '}
              <span className="text-blue-600">P</span>latform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering our nation with collaborative innovation and cutting-edge IT solutions to tackle crises and drive resilience
            </p>
          </div>
        </div>
      </div>

      {/* About the Website Section */}
      <div id="about-platform" className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About the Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-lg text-gray-600 leading-relaxed">
                The National Resilience Platform is a groundbreaking initiative that connects talented professionals, 
                engineers, and innovators with critical national projects. Our platform serves as a bridge between 
                technological expertise and national security needs, fostering collaboration and innovation for a 
                more resilient future.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors duration-300">
                <h3 className="font-bold text-xl mb-2">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors duration-300">
                <h3 className="font-bold text-xl mb-2">1000+</h3>
                <p className="text-gray-600">Expert Contributors</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors duration-300">
                <h3 className="font-bold text-xl mb-2">50+</h3>
                <p className="text-gray-600">Partner Organizations</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors duration-300">
                <h3 className="font-bold text-xl mb-2">24/7</h3>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Section - Vertical Scrollable */}
      <div id="news" className="py-20 bg-[#f9fafb]">
        <h2 className="text-3xl font-bold text-center mb-12">News Updates</h2>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 h-[500px] overflow-y-auto">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <span className="text-sm text-blue-600 font-semibold">March 15, 2024</span>
                <h3 className="text-xl font-bold my-2">New Cybersecurity Initiative</h3>
                <p className="text-gray-600">
                  Launch of a nationwide program to strengthen digital infrastructure security across critical sectors. The initiative aims to protect key national assets and improve response capabilities against cyber threats.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <span className="text-sm text-blue-600 font-semibold">March 10, 2024</span>
                <h3 className="text-xl font-bold my-2">AI Research Partnership</h3>
                <p className="text-gray-600">
                  Strategic collaboration with leading tech institutions to develop AI solutions for national security. This partnership will focus on developing cutting-edge AI applications for threat detection and prevention.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <span className="text-sm text-blue-600 font-semibold">March 5, 2024</span>
                <h3 className="text-xl font-bold my-2">Emergency Response System</h3>
                <p className="text-gray-600">
                  Successful deployment of new emergency response system in major metropolitan areas. The system has already shown significant improvements in response times and coordination capabilities.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <span className="text-sm text-blue-600 font-semibold">February 28, 2024</span>
                <h3 className="text-xl font-bold my-2">Blockchain Security Framework</h3>
                <p className="text-gray-600">
                  Development of a new blockchain-based security framework for critical infrastructure protection. This innovative approach will enhance the integrity and traceability of security operations.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <span className="text-sm text-blue-600 font-semibold">February 20, 2024</span>
                <h3 className="text-xl font-bold my-2">Smart City Integration</h3>
                <p className="text-gray-600">
                  Implementation of smart city technologies to enhance urban resilience and security. The project includes advanced sensors and AI-powered monitoring systems.
                </p>
              </div>

              <div className="pb-6">
                <span className="text-sm text-blue-600 font-semibold">February 15, 2024</span>
                <h3 className="text-xl font-bold my-2">Quantum Computing Research</h3>
                <p className="text-gray-600">
                  Initiation of quantum computing research program for advanced cryptography and security applications. This groundbreaking research aims to future-proof our national security infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              onClick={handleViewAllNews}
            >
              View All Updates
            </button>
          </div>
        </div>
      </div>

      {/* Success Stories Section - Now after News */}
      <div id="success-stories" className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Cybersecurity Enhancement</h3>
              <p className="text-gray-600 mb-4 text-center">
                A team of experts developed an advanced threat detection system, improving national infrastructure security by 60%.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Emergency Response System</h3>
              <p className="text-gray-600 mb-4 text-center">
                Innovative AI-powered solution reduced emergency response times by 45% in critical situations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Data Analytics Platform</h3>
              <p className="text-gray-600 mb-4 text-center">
                Created a comprehensive data analysis system that helped prevent multiple security breaches.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Idea Section */}
      <div className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Main Idea</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Target className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Mission</h3>
              <p className="text-gray-600 text-center">
                To strengthen national security through technological innovation and collaboration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Lightbulb className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Vision</h3>
              <p className="text-gray-600 text-center">
                Creating a resilient future through community-driven technological solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Goal</h3>
              <p className="text-gray-600 text-center">
                Connecting experts with critical projects to solve national challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div id="how-it-works" className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div 
              onClick={handleBrowseProjects}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Browse Projects</h3>
              <p className="text-gray-600">Explore available projects that match your expertise</p>
            </div>

            <div 
              onClick={handleChooseContribution}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Choose Contribution</h3>
              <p className="text-gray-600">Select how you want to contribute - technically or financially</p>
            </div>

            <div 
              onClick={handleSubmitProposal}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Submit Proposal</h3>
              <p className="text-gray-600">Present your ideas or make your contribution</p>
            </div>

            <div 
              onClick={handleStartContributing}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Start Contributing</h3>
              <p className="text-gray-600">Begin working on approved projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Add hover effect to the container */}
      <div className="bg-[#f9fafb] py-20">
        <div className="container mx-auto px-4 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
          <h2 className="text-3xl font-bold mb-8">Ready to Make a Difference?</h2>
          <button
            onClick={handleSignUpClick}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Register and join our community
          </button>
        </div>
      </div>

      {/* Help Center Section */}
      <div id="help-center" className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Help Center</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">User Guides</h3>
              <p className="text-gray-600 text-center">
                Comprehensive guides to help you navigate and make the most of our platform's features.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <MessageSquare className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">FAQs</h3>
              <p className="text-gray-600 text-center">
                Find answers to commonly asked questions about our platform and services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <LifeBuoy className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Support Team</h3>
              <p className="text-gray-600 text-center">
                Our dedicated support team is available 24/7 to assist you with any questions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms of Service Section */}
      <div id="terms-of-service" className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Terms of Service</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">1. Platform Usage</h3>
                <p className="text-gray-600">
                  By accessing our platform, you agree to use it responsibly and in accordance with all applicable laws and regulations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">2. User Responsibilities</h3>
                <p className="text-gray-600">
                  Users are responsible for maintaining the confidentiality of their account information and for all activities under their account.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">3. Project Guidelines</h3>
                <p className="text-gray-600">
                  All projects must comply with our security and quality standards to ensure the best outcomes for our national resilience initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Section */}
      <div id="privacy-policy" className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Privacy Policy</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Data Collection</h3>
                <p className="text-gray-600">
                  We collect and process personal information only as necessary to provide our services and improve your platform experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Data Security</h3>
                <p className="text-gray-600">
                  We implement robust security measures to protect your personal information and maintain the highest standards of data privacy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Your Rights</h3>
                <p className="text-gray-600">
                  You have the right to access, modify, or delete your personal information at any time through your account settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 