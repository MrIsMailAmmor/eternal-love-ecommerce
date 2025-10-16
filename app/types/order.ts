import { User } from './auth';
import { Product } from './product';

export interface Order {
  id: string;
  user: User;
  items: Product[];
  total: number;
}
