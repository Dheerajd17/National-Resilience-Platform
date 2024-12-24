import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DollarSign, TrendingUp, Users, AlertCircle, CreditCard } from 'lucide-react';
import { projects } from '../data';

const FinancialContribution: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));
  const [amount, setAmount] = useState('');

  const fundraisers = [
    {
      id: 1,
      title: "Initial Development Phase",
      description: "Fund the core development team and initial infrastructure setup.",
      target: 5000,
      raised: 3200,
      backers: 28,
      daysLeft: 15
    },
    {
      id: 2,
      title: "Feature Enhancement",
      description: "Support the development of advanced features and integrations.",
      target: 3000,
      raised: 1800,
      backers: 16,
      daysLeft: 20
    }
  ];

  const handleContributeClick = () => {
    if (!amount) {
      alert('Please enter an amount');
      return;
    }
    navigate(`/payment-gateway`); // Navigate to payment gateway
  };

  if (!project) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-900">Project not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h1>
          <p className="text-gray-600">{project.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Fundraisers List */}
          <div className="lg:col-span-2 space-y-6">
            {fundraisers.map((fundraiser) => (
              <div key={fundraiser.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {fundraiser.title}
                </h3>
                <p className="text-gray-600 mb-4">{fundraiser.description}</p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: `${(fundraiser.raised / fundraiser.target) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>${fundraiser.raised} raised</span>
                    <span>${fundraiser.target} goal</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Users className="h-5 w-5 mx-auto mb-1 text-blue-600" />
                    <div className="text-sm text-gray-600">
                      <span className="block font-semibold">{fundraiser.backers}</span>
                      <span>Backers</span>
                    </div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 mx-auto mb-1 text-green-600" />
                    <div className="text-sm text-gray-600">
                      <span className="block font-semibold">{Math.round((fundraiser.raised / fundraiser.target) * 100)}%</span>
                      <span>Funded</span>
                    </div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <AlertCircle className="h-5 w-5 mx-auto mb-1 text-orange-600" />
                    <div className="text-sm text-gray-600">
                      <span className="block font-semibold">{fundraiser.daysLeft}</span>
                      <span>Days Left</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Donation Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Make a Contribution</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Contribution Amount ($)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="number"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                <button 
                  onClick={handleContributeClick}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Contribute Now</span>
                </button>

                <div className="text-sm text-gray-500">
                  <p className="mb-2">Your contribution will help:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Fund development resources</li>
                    <li>Support infrastructure costs</li>
                    <li>Enable feature implementations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialContribution;