import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectSubmission {
  email: string;
  phone: string;
  description: string;
  requirements: string;
  budget: string;
  timeline: string;
}

const PostProject: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ProjectSubmission>({
    email: '',
    phone: '',
    description: '',
    requirements: '',
    budget: '',
    timeline: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [budgetError, setBudgetError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const categories = ['Web Development', 'Mobile Apps', 'AI/ML', 'DevOps'];

  const timelineOptions = [
    'Less than 2 Months',
    '2-4 Months',
    '4-6 Months',
    'More than 6 Months'
  ];

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setFormData({ ...formData, budget: value });
      setBudgetError('');
    } else {
      setBudgetError('Please enter numbers only');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      if (value.length <= 10) {
        setFormData({ ...formData, phone: value });
        setPhoneError(value.length === 10 ? '' : 'Enter 10 digit mobile number');
      }
    } else {
      setPhoneError('Please enter numbers only');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, email: value });
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!value) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address (e.g., example@email.com)');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    if (formData.phone.length !== 10) {
      setPhoneError('Enter 10 digit mobile number');
      return;
    }
    
    if (!formData.budget || !/^\d+$/.test(formData.budget)) {
      setBudgetError('Please enter a valid budget');
      return;
    }

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
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleEmailChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  emailError ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-600">
                  {emailError}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="tel"
                required
                placeholder="Enter 10 digit mobile number"
                value={formData.phone}
                onChange={handlePhoneChange}
                maxLength={10}
                className={`mt-1 block w-full px-3 py-2 border ${
                  phoneError ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
              {phoneError && (
                <p className="mt-1 text-sm text-red-600">
                  {phoneError}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                required
                placeholder="Brief"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Technical Requirements</label>
              <textarea
                required
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                rows={3}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Approx. Budget (in INR)</label>
              <input
                type="text"
                required
                placeholder="Enter Numbers"
                value={formData.budget}
                onChange={handleBudgetChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  budgetError ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
              {budgetError && (
                <p className="mt-1 text-sm text-red-600">
                  {budgetError}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Expected Timeline</label>
              <select
                required
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Timeline</option>
                {timelineOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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