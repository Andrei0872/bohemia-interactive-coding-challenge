import { Product } from "~/types/product";

export const getFeaturedProduct = (products: Product[]): Product | undefined => {
  return products.find(p => p.featured);
}

export const getImageSrc = (p: Product) => {
  return typeof p.image === 'string' ? p.image : p.image.src;
}

const CURRENCY_CODES_SYMBOLS = new Map([['USD', '$']]);
export const getCurrencySymbolFromCode = (code: string) => {
  return CURRENCY_CODES_SYMBOLS.get(code) ?? '';
}