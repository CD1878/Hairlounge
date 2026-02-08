export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
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