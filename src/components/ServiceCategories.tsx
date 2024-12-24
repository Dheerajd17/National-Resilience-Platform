import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Truck, 
  BarChart2, 
  TrendingUp, 
  Cloud,
  ArrowRight
} from 'lucide-react';

const categories = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Build and scale your online store with modern e-commerce solutions',
    icon: ShoppingCart,
    features: ['Custom E-commerce Platforms', 'Payment Integration', 'Inventory Management', 'Shopping Cart Solutions']
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    description: 'Optimize your supply chain with intelligent logistics solutions',
    icon: Truck,
    features: ['Fleet Management', 'Route Optimization', 'Warehouse Management', 'Real-time Tracking']
  },
  {
    id: 'analytics',
    title: 'Business Analytics',
    description: 'Transform data into actionable business insights',
    icon: BarChart2,
    features: ['Data Visualization', 'Predictive Analytics', 'Business Intelligence', 'Custom Reports']
  },
  {
    id: 'sales',
    title: 'Sales & Marketing',
    description: 'Boost your sales with advanced marketing solutions',
    icon: TrendingUp,
    features: ['CRM Integration', 'Lead Generation', 'Marketing Automation', 'Sales Analytics']
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    description: 'Scale your infrastructure with modern cloud solutions',
    icon: Cloud,
    features: ['Cloud Migration', 'DevOps', 'Serverless Architecture', 'Cloud Security']
  }
];

const ServiceCategories: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    console.log('Navigating to:', `/services/${categoryId}/applications`);
    navigate(`/services/${categoryId}/applications`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              
              <div className="space-y-2">
                {category.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCategories;