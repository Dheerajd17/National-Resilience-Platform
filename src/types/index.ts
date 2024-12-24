export interface Project {
  id: number;
  title: string;
  description: string;
  budget: string;
  duration: string;
  location: string;
  skills: string[];
  applicants: number;
}

export interface Service {
  id: number;
  title: string;
  provider: {
    name: string;
    image: string;
    rating: number;
    reviews: number;
  };
  description: string;
  price: string;
  deliveryTime: string;
  tags: string[];
}