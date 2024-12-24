import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface NewsItem {
  date: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author?: string;
  image?: string;
}

const newsItems: NewsItem[] = [
  {
    date: "March 20, 2024",
    title: "IMA Market Assam: A Model of Urban Resilience",
    category: "Urban Development",
    author: "Dr. Rajesh Bordoloi",
    summary: "Innovative market complex showcases urban resilience and sustainable development in Northeast India.",
    content: `The National Resilience Platform highlights the successful implementation of resilient infrastructure at IMA Market Assam, setting a new benchmark for urban development in the region. This pioneering project demonstrates how modern design principles can be integrated with traditional market systems to create a more resilient urban space.

    Project Highlights:
    • Flood-resistant architectural design
    • Advanced drainage and water management systems
    • Solar-powered facilities for sustainable energy
    • Smart waste management infrastructure
    • Digital payment and inventory management systems
    
    The IMA Market project has successfully transformed one of Assam's busiest commercial areas into a model of urban resilience. The market's innovative design not only protects against natural disasters but also promotes economic sustainability and community engagement.

    Impact Assessment:
    • 40% reduction in flood-related disruptions
    • 60% improvement in waste management efficiency
    • 30% increase in vendor participation
    • Significant boost to local economy
    
    This initiative serves as a blueprint for similar projects across Northeast India, demonstrating how traditional markets can be modernized while maintaining their cultural significance.`,
    image: "https://southasiaviews.com/wp-content/uploads/2021/04/ema-edited.jpg"
  },
  {
    date: "March 15, 2024",
    title: "New Cybersecurity Initiative",
    category: "Security",
    author: "Dr. Sarah Johnson",
    summary: "Launch of a nationwide program to strengthen digital infrastructure security across critical sectors.",
    content: `The National Resilience Platform today announced the launch of a comprehensive cybersecurity initiative aimed at strengthening the nation's digital infrastructure. This program represents a significant step forward in protecting critical sectors from emerging cyber threats.

    Key features of the initiative include:
    • Advanced threat detection systems
    • Real-time monitoring capabilities
    • Rapid response protocols
    • Cross-sector coordination mechanisms
    
    The initiative will be implemented across multiple phases over the next 18 months, with initial deployments focusing on critical infrastructure sectors such as energy, healthcare, and transportation.`,
    image: "https://nhtechalliance.org/wp-content/uploads/2024/03/NHTA-Header.png"
  },
  {
    date: "March 10, 2024",
    title: "AI Research Partnership Announcement",
    category: "Research & Development",
    author: "Prof. Michael Chen",
    summary: "Strategic collaboration with leading tech institutions to develop AI solutions.",
    content: `In a groundbreaking development, the National Resilience Platform has established partnerships with leading technological institutions to advance AI research in national security. This collaboration aims to leverage cutting-edge artificial intelligence technologies to enhance our nation's defensive capabilities.

    The partnership will focus on:
    • Developing advanced AI algorithms for threat detection
    • Creating predictive analysis systems
    • Implementing machine learning solutions for cybersecurity
    • Establishing AI-driven emergency response systems

    This initiative represents a significant step forward in combining academic expertise with practical security applications.`,
    image: "https://news.liverpool.ac.uk/wp-content/uploads/2023/11/AI-GettyImages-1452604857WEB.jpg"
  },
  {
    date: "March 5, 2024",
    title: "Emergency Response System Deployment",
    category: "Infrastructure",
    author: "Col. James Wilson",
    summary: "Successful deployment of new emergency response system in metropolitan areas.",
    content: `The National Resilience Platform has successfully completed the deployment of a next-generation emergency response system across major metropolitan areas. This system marks a significant advancement in our ability to respond to critical situations and natural disasters.

    System highlights:
    • Real-time incident tracking and response coordination
    • Integrated communication networks
    • Automated resource allocation
    • AI-powered decision support
    
    Initial results show a 45% improvement in response times and enhanced coordination between different emergency services.`,
    image: "https://www.karexpert.com/wp-content/uploads/2022/04/ambulance-hero.webp"
  },
  {
    date: "February 28, 2024",
    title: "Blockchain Security Framework Implementation",
    category: "Technology",
    author: "Dr. Emily Rodriguez",
    summary: "New blockchain framework enhances security infrastructure.",
    content: `A revolutionary blockchain-based security framework has been implemented to protect critical infrastructure. This innovative approach combines distributed ledger technology with advanced cryptographic protocols to ensure unprecedented levels of security and transparency.

    Framework features:
    • Immutable audit trails
    • Decentralized security protocols
    • Smart contract automation
    • Enhanced data integrity verification`,
    image: "https://pixelplex.io/wp-content/uploads/2021/01/everything-you-need-to-know-about-blockchain-security-main-1600.jpg"
  },
  {
    date: "February 20, 2024",
    title: "Smart City Integration Project",
    category: "Urban Development",
    author: "Eng. David Park",
    summary: "Implementation of smart technologies for urban security enhancement.",
    content: `The Smart City Integration Project has entered its implementation phase, bringing advanced monitoring and security systems to urban areas. This comprehensive approach combines IoT sensors, AI analytics, and integrated command centers to create safer, more resilient cities.

    Project components:
    • Advanced surveillance systems
    • Environmental monitoring
    • Traffic management integration
    • Public safety enhancement measures`,
    image: "https://media.licdn.com/dms/image/v2/D5612AQFkEB0bwhst8Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709808629051?e=2147483647&v=beta&t=ZY4qh8vAZZL61Z7iz-qEv9nMOQrb3XDxjHNmjYDF_T4"
  },
  {
    date: "February 15, 2024",
    title: "Quantum Computing Security Research",
    category: "Research",
    author: "Dr. Lisa Kumar",
    summary: "Launch of quantum computing research program for advanced security.",
    content: `A new quantum computing research program has been initiated to develop next-generation security solutions. This groundbreaking research aims to prepare our national security infrastructure for the quantum computing era.

    Research focus areas:
    • Post-quantum cryptography
    • Quantum key distribution
    • Quantum-resistant algorithms
    • Secure communication protocols`,
    image: "https://wordpress.cdsec.co.uk/wp-content/uploads/2023/07/Quantum-Computing-Image_CSIAC_Journal_V7N1_WEB-panorama-dd57de6705583cdec20f5dbf27ac1476-60b8e1dac01c5.jpeg"
  },
  {
    date: "February 10, 2024",
    title: "International Cybersecurity Coalition",
    category: "International",
    author: "Ambassador Sarah Thompson",
    summary: "Formation of international coalition for cybersecurity cooperation.",
    content: `The National Resilience Platform has spearheaded the formation of an international cybersecurity coalition. This partnership brings together experts and resources from multiple nations to address global security challenges.

    Coalition objectives:
    • Information sharing networks
    • Joint response protocols
    • Collaborative research initiatives
    • Cross-border threat mitigation`,
    image: "https://resources.appsealing.com/4-svc/wp-content/uploads/2022/01/10142405/cyber-security-regulations-image.png"
  },
  {
    date: "February 5, 2024",
    title: "Critical Infrastructure Protection Program",
    category: "Infrastructure",
    author: "Eng. Robert Martinez",
    summary: "Launch of comprehensive infrastructure protection program.",
    content: `A new program focused on protecting critical national infrastructure has been launched. This initiative encompasses both physical and digital protection measures for key national assets.

    Program elements:
    • Advanced monitoring systems
    • Resilient design implementation
    • Emergency response protocols
    • Staff training and development`,
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFvZEOtn1UaBw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708866881615?e=2147483647&v=beta&t=V7TlJOkNEhpWkMb71uaeXQPHd0b25NhVIfsVIvZ_qZU"
  }
];

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Latest Updates</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {item.image && (
                <div className="h-64 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-600 font-semibold">{item.date}</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                {item.author && (
                  <p className="text-gray-600 mb-4">By {item.author}</p>
                )}
                
                <div className="prose max-w-none">
                  {item.content.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage; 