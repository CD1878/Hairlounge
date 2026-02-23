export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
}

export interface ServiceOption {
  name: string;
  description: string;
  idealFor: string[];
  included?: string[];
}

export interface DetailedServiceItem {
  id: string;
  title: string;
  overview: string;
  options: ServiceOption[];
}

export interface Review {
  id: number;
  author: string;
  role?: string;
  avatar?: string;
  rating: number;
  text: string;
  source?: 'google' | 'treatwell';
  date?: string;
}

export interface SliderItem {
  id: string;
  image: string;
  title: string;
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
}