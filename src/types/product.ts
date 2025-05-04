
export type Brand = 'Bajaj' | 'Hero' | 'Royal Enfield' | 'TVS' | 'Yamaha' | 'KTM' | 'Kawasaki' | 'Suzuki' | 'Honda' | 'Triumph' | 'Ducati' | 'BMW' | 'Harley-Davidson';

export type Category = 'Sport' | 'Cruiser' | 'Adventure' | 'Naked' | 'Touring' | 'Off-Road' | 'Street' | 'Classic';

export interface ProductSpecification {
  engine?: string;
  power?: string;
  torque?: string;
  transmission?: string;
  mileage?: string;
  topSpeed?: string;
  brakes?: string;
  suspension?: string;
  tires?: string;
  weight?: string;
  fuelCapacity?: string;
}

export interface Product {
  id: number;
  name: string;
  brand: Brand;
  price: number;
  originalPrice?: number;
  category: Category;
  images: string[];
  description: string;
  inStock: boolean;
  rating: number;
  specs: ProductSpecification;
  featured?: boolean;
  new?: boolean;
}
