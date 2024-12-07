import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectSubmission {
  title: string;
  description: string;
  budget: string;
  duration: string;
  location: string;
  skills: string[];
  category: string;
}

const PostProject: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ProjectSubmission>({
    title: '',
    description: '',
    budget: '',
    duration: '',
    location: '',
    skills: [],
    category: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = ['Web Development', 'Mobile Apps', 'AI/ML', 'DevOps'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/projects');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Submit Your Project</h1>
          
          {showSuccess && (
            <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-md">
              Project submitted successfully! It will be reviewed by our team.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate('/projects')}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Submit Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostProject; 