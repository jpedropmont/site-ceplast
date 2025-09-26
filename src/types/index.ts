export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: 'material' | 'format';
  subcategory: string;
  barrierLevel?: 'baixa-media' | 'media-alta' | 'alta-premium';
  applications: string[];
  printCompatibility?: string;
  packaging?: string;
}

export interface Contact {
  id: number;
  name: string;
  position: string;
  phone: string;
  email: string;
  image: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface Segment {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  tags: string[];
  gradient: string;
  url: string;
}
