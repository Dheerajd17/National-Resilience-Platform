import React from 'react';
import { Clock, DollarSign, MapPin, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">{project.description}</p>

          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <DollarSign className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>{project.budget}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>{project.applicants} applicants</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={handleApply}
          className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Contribute Now
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;