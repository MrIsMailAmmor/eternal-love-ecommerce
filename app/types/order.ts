import type { User } from './auth';
import type { Product } from './product';

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  user: User;
  items: Product[];
  total: number;
}
