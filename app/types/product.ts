import productsObject from '../../data/products.json'

export type Product = (typeof productsObject)['products'][0];