import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Application {
  id: string;
  name: string;
  description: string;
  icon: string;
  rating: number;
  reviews: number;
  users: number;
  isFavorite?: boolean;
  badge?: string;
  link: string;
}

const applications: Record<string, Application[]> = {
  ecommerce: [
    {
      id: '1',
      name: 'Shopify',
      description: 'Complete e-commerce platform for online stores and retail point-of-sale systems',
      icon: 'https://cdn.shopify.com/app-store/listing_images/21d06b1c0d4eff7c8daf45bfc8939c4a/icon/CNer9bX0lu8CEAE=.png',
      rating: 4.8,
      reviews: 189000,
      users: 1400000,
      isFavorite: true,
      badge: 'Most Popular',
      link: 'https://apps.shopify.com/mobile'
    },
    {
      id: '2',
      name: 'WooCommerce',
      description: 'Open-source e-commerce plugin for WordPress',
      icon: 'https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce@2x.png',
      rating: 4.6,
      reviews: 102000,
      users: 847000,
      link: 'https://woocommerce.com/mobile/'
    },
    {
      id: '3',
      name: 'Magento',
      description: 'Advanced open-source e-commerce platform',
      icon: 'https://eco-cdn.iqpc.com/eco/images/partners/PBKnscob7HOydNOQhlsqA26UziduBfOFU9siTTPs.png',
      rating: 4.5,
      reviews: 76000,
      users: 623000,
      link: 'https://business.adobe.com/products/magento/magento-commerce.html'
    },
    {
      id: '4',
      name: 'OpenCart',
      description: 'User-friendly open-source e-commerce platform',
      icon: 'https://toppng.com/uploads/preview/opencart-logo-11609371003zzbvbdo4yq.png',
      rating: 4.3,
      reviews: 44000,
      users: 347000,
      link: 'https://www.opencart.com/index.php?route=cms/download'
    }
  ],
  logistics: [
    {
      id: '1',
      name: 'FleetIO',
      description: 'Modern fleet management software for tracking and maintaining vehicles',
      icon: 'https://images.ctfassets.net/hh9a9bjevp7u/74XaSWhoiAssfq5nRbCVPH/c61874ef97510d0eec91e70aba0fc94b/Fleetio_Logo_Square.png',
      rating: 4.7,
      reviews: 67000,
      users: 289000,
      link: 'https://www.fleetio.com/'
    },
    {
      id: '2',
      name: 'Shipstation',
      description: 'Web-based shipping solution for e-commerce fulfillment',
      icon: 'https://cyclr.com/wp-content/uploads/2022/03/ext-603.png',
      rating: 4.6,
      reviews: 143000,
      users: 567000,
      link: 'https://www.shipstation.com/'
    },
    {
      id: '3',
      name: 'Onfleet',
      description: 'Last mile delivery management software',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5saQeLjy1xHuSK18eCbfZHQZP4L0kmQ5tw&s',
      rating: 4.5,
      reviews: 50000,
      users: 100000,
      link: 'https://onfleet.com/'
    }
  ],
  analytics: [
    {
      id: '1',
      name: 'Tableau',
      description: 'Interactive data visualization software',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDA8o-B1aL6Mxg8qvIBfVdFj7g6HLpEEWZ4g&s',
      rating: 4.8,
      reviews: 1600000,
      users: 4300000,
      link: 'https://www.tableau.com/products/desktop'
    },
    {
      id: '2',
      name: 'Power BI',
      description: 'Business analytics service by Microsoft',
      icon: 'https://w7.pngwing.com/pngs/252/727/png-transparent-power-bi-business-intelligence-microsoft-analytics-microsoft-text-rectangle-logo-thumbnail.png',
      rating: 4.7,
      reviews: 892000,
      users: 2800000,
      link: 'https://powerbi.microsoft.com/'
    },
    {
      id: '3',
      name: 'BoldBi',
      description: 'Make Data Work for You. Reveal Insights & Turn Your Data into Decisions',
      icon: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d2c069e2cc1332ca6a096a5723100cab/bold-bi.png',
      rating: 4.6,
      reviews: 500000,
      users: 2000000,
      link: 'https://www.boldbi.com/'
    },
    {
      id: '4',
      name: 'Sisense',
      description: 'AI-driven analytics and business intelligence platform',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTQwhDOGtu49dPxpqcuipjDXBVhnyXFJqzQ&s',
      rating: 4.5,
      reviews: 200000,
      users: 1000000,
      link: 'https://www.sisense.com/'
    }
  ],
  sales: [
    {
      id: '1',
      name: 'Salesforce',
      description: 'Leading CRM platform for sales and marketing',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUlf-GFdzix1oPGJB007icYOytp6YSk-ItA&s',
      rating: 4.8,
      reviews: 2400000,
      users: 7800000,
      link: 'https://www.salesforce.com/'
    },
    {
      id: '2',
      name: 'HubSpot',
      description: 'Inbound marketing and sales software',
      icon: 'https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_the-logo.svg',
      rating: 4.7,
      reviews: 947000,
      users: 3200000,
      link: 'https://www.hubspot.com/'
    },
    {
      id: '3',
      name: 'Pipedrive',
      description: 'Sales CRM and pipeline management tool',
      icon: 'https://play-lh.googleusercontent.com/XAKratCqSJUb3ZmItve16p8RjiF0ZvN_czysEoqtGET7i-tsdJEozbnOYRM6jQNHEg',
      rating: 4.6,
      reviews: 800000,
      users: 2000000,
      link: 'https://www.pipedrive.com/'
    },
    {
      id: '4',
      name: 'Zoho CRM',
      description: 'Customer relationship management software',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_-BHpijSDRd0Jza6EhqpXpo48EGhAJz8rg&s',
      rating: 4.5,
      reviews: 1000000,
      users: 5000000,
      link: 'https://www.zoho.com/crm/'
    }
  ],
  cloud: [
    {
      id: '1',
      name: 'AWS',
      description: 'Leading cloud computing platform by Amazon',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQerGEWZxlTG4jra5dMGs4mUz8DWvZmuIEkoQ&s',
      rating: 4.8,
      reviews: 3700000,
      users: 12400000,
      link: 'https://aws.amazon.com/'
    },
    {
      id: '2',
      name: 'Google Cloud',
      description: 'Cloud computing services by Google',
      icon: 'https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-cloud-icon-vector-PNG.png',
      rating: 4.7,
      reviews: 2100000,
      users: 8900000,
      link: 'https://cloud.google.com/'
    },
    {
      id: '3',
      name: 'Microsoft Azure',
      description: 'Cloud computing platform by Microsoft',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamIIltzDP-2bd_ICJ2J_2lUIGBPsw7sQG0A&s',
      rating: 4.7,
      reviews: 8000000,
      users: 15000000,
      link: 'https://azure.microsoft.com/'
    },
    {
      id: '4',
      name: 'DigitalOcean',
      description: 'Cloud infrastructure provider for developers',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdyTyPxQ6WanwfTE0kXOnIYoE_FY0nxuLLA&s',
      rating: 4.6,
      reviews: 1000000,
      users: 5000000,
      link: 'https://www.digitalocean.com/'
    }
  ]
};

interface ApplicationsListProps {
  categoryId: string;
}

const ApplicationsList: React.FC<ApplicationsListProps> = ({ categoryId }) => {
  const apps = applications[categoryId] || [];
  
  // Find the matching category from ServiceCategories
  const categoryInfo = categories.find(cat => cat.id === categoryId);
  
  console.log('CategoryId:', categoryId);
  console.log('Available apps:', apps);

  // Add a helper function to format numbers (can be used for both reviews and users)
  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };

  if (apps.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Applications</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <p className="text-yellow-700">
            No applications found for category: {categoryId}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {categoryInfo?.title || categoryId}
        </h3>
        <p className="text-gray-600">{categoryInfo?.description}</p>
      </div>
      <div className="max-w-3xl mx-auto grid gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300 relative"
          >
            {app.badge && (
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {app.badge}
              </div>
            )}
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-4"
            >
              <img
                src={app.icon}
                alt={app.name}
                className="w-16 h-16 rounded-lg object-contain"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/64?text=' + app.name.charAt(0);
                }}
              />
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{app.name}</h3>
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-gray-600 mt-1">{app.description}</p>
                <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{app.rating}</span>
                    <span className="ml-2">({formatCount(app.reviews)} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600">
                      {formatCount(app.users)} active users
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add the categories array from ServiceCategories.tsx
const categories = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Build and scale your online store with modern e-commerce solutions',
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    description: 'Optimize your supply chain with intelligent logistics solutions',
  },
  {
    id: 'analytics',
    title: 'Business Analytics',
    description: 'Transform data into actionable business insights',
  },
  {
    id: 'sales',
    title: 'Sales & Marketing',
    description: 'Boost your sales with advanced marketing solutions',
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    description: 'Scale your infrastructure with modern cloud solutions',
  }
];

export default ApplicationsList;
