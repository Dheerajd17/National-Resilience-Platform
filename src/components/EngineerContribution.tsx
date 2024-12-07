import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MessageSquare, GitBranch, Trello, Users, Code, Send, Calendar } from 'lucide-react';
import { projects } from '../data';

const EngineerContribution: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('chat');

  const mockMessages = [
    { id: 1, user: 'Sarah Chen', role: 'Project Lead', message: 'Welcome to the team! Let me know if you have any questions about the architecture.', time: '2h ago' },
    { id: 2, user: 'Mike Ross', role: 'Developer', message: 'I\'ve just pushed the updates to the authentication system. Please review when you can.', time: '1h ago' },
    { id: 3, user: 'Emma Wilson', role: 'Designer', message: 'The new UI mockups are ready for implementation. Check them out in Figma.', time: '30m ago' }
  ];

  const milestones = [
    {
      title: 'Phase 1: Foundation',
      status: 'completed',
      tasks: [
        { name: 'Project Setup', status: 'completed' },
        { name: 'Database Schema', status: 'completed' },
        { name: 'Basic API Structure', status: 'completed' }
      ]
    },
    {
      title: 'Phase 2: Core Features',
      status: 'in-progress',
      tasks: [
        { name: 'User Authentication', status: 'in-progress' },
        { name: 'Product Management', status: 'pending' },
        { name: 'Payment Integration', status: 'pending' }
      ]
    },
    {
      title: 'Phase 3: Advanced Features',
      status: 'pending',
      tasks: [
        { name: 'Analytics Dashboard', status: 'pending' },
        { name: 'Real-time Notifications', status: 'pending' },
        { name: 'Mobile Optimization', status: 'pending' }
      ]
    }
  ];

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
      <div className="max-w-6xl mx-auto">
        {/* Project Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h1>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/example/project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
              >
                <GitBranch className="h-5 w-5" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
              activeTab === 'chat'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <MessageSquare className="h-5 w-5" />
            <span>Community Chat</span>
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
              activeTab === 'progress'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Trello className="h-5 w-5" />
            <span>Progress & Plans</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {activeTab === 'chat' ? (
            <>
              {/* Chat Messages */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-md">
                <div className="p-6 space-y-6">
                  {mockMessages.map((msg) => (
                    <div key={msg.id} className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline space-x-2">
                          <h4 className="text-sm font-semibold text-gray-900">{msg.user}</h4>
                          <span className="text-xs text-gray-500">{msg.role}</span>
                          <span className="text-xs text-gray-400">{msg.time}</span>
                        </div>
                        <p className="text-gray-600 mt-1">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t p-4">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Members</h3>
                <div className="space-y-4">
                  {['Project Lead', 'Senior Developer', 'UI/UX Designer', 'Backend Developer'].map((role, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">John Doe</p>
                        <p className="text-xs text-gray-500">{role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Progress Tracking */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Milestones</h3>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-medium text-gray-900">{milestone.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          milestone.status === 'completed' ? 'bg-green-100 text-green-800' :
                          milestone.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                        </span>
                      </div>
                      <div className="space-y-3">
                        {milestone.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-center space-x-3">
                            <div className={`w-5 h-5 rounded-full border-2 ${
                              task.status === 'completed' ? 'bg-green-500 border-green-500' :
                              task.status === 'in-progress' ? 'border-yellow-500' :
                              'border-gray-300'
                            }`} />
                            <span className="text-gray-600">{task.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
                <div className="space-y-4">
                  {[
                    { date: 'Mar 15', event: 'Authentication System Complete' },
                    { date: 'Mar 20', event: 'Frontend UI Implementation' },
                    { date: 'Mar 25', event: 'Database Migration' },
                    { date: 'Mar 30', event: 'Testing Phase Begins' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.date}</p>
                        <p className="text-sm text-gray-600">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EngineerContribution;