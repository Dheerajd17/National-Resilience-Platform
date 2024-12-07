import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface ProjectsPageProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProjects: any[];
  handleSearch: (query: string) => void;
  activeCategory: string;
  handleCategoryFilter: (category: string) => void;
  categories: string[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({
  searchQuery,
  setSearchQuery,
  filteredProjects,
  handleSearch,
  activeCategory,
  handleCategoryFilter,
  categories
}) => {
  const navigate = useNavigate();

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Projects to Contribute
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Connect with employers and contribute to exciting projects.
        </p>

        <button
          onClick={() => navigate('/post-project')}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-flex items-center space-x-2"
        >
          <span>Post a project and bring to our attention</span>
        </button>
        
        {/* Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryFilter(category)}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 py-8">
            No projects found for this category.
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjectsPage; 