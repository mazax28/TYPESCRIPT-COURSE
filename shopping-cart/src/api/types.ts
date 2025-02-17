export type Products = Product[];

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  amount?: number;
}

export interface Rating {
  rate: number;
  count: number;
}
