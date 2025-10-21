import type { User } from './auth';
import type { Product } from './product';

export interface Order {
  id: string;
  user: User;
  items: Product[];
  total: number;
}
