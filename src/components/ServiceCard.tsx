import React from 'react';
import { Clock, DollarSign, Star } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={service.provider.image}
              alt={service.provider.name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-medium text-gray-900">{service.provider.name}</h4>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="ml-1 text-sm text-gray-600">
                  {service.provider.rating} ({service.provider.reviews} reviews)
                </span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>

          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <DollarSign className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>Starting at {service.price}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>{service.deliveryTime}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {service.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
          View Service
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;