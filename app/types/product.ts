export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  type?: "single" | "box";
  contains?: Array<{ productId: string; quantity: number }>;
}
