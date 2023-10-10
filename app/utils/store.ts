import { Product } from "~/types/product";

export const getFeaturedProduct = (products: Product[]): Product | undefined => {
  return products.find(p => p.featured);
}