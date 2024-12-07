import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, DollarSign, MapPin, Users, Code, Coins } from 'lucide-react';
import { projects } from '../data';

const ProjectDetails: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{project.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <DollarSign className="h-6 w-6 mr-3" />
              <div>
                <h3 className="font-semibold">Budget</h3>
                <p>{project.budget}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-6 w-6 mr-3" />
              <div>
                <h3 className="font-semibold">Duration</h3>
                <p>{project.duration}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-6 w-6 mr-3" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>{project.location}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-6 w-6 mr-3" />
              <div>
                <h3 className="font-semibold">Current Applicants</h3>
                <p>{project.applicants} professionals</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Project Description</h2>
          <p className="text-gray-600">{project.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => navigate(`/project/${project.id}/engineer`)}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <Code className="h-5 w-5" />
            <span>Contribute as Engineer</span>
          </button>
          <button
            onClick={() => navigate(`/project/${project.id}/financial`)}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            <Coins className="h-5 w-5" />
            <span>Contribute Financially</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;