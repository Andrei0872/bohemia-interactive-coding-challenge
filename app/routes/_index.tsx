import { json, type MetaFunction } from "@remix-run/node";
import products from '../../data/products.json'
import { useLoaderData } from "@remix-run/react";
import Header from "~/components/Store/Header";
import Featured from "~/components/Store/Featured";
import Products from "~/components/Store/Products";
import { getFeaturedProduct } from "~/utils/store";
import { ProductsProvider } from "~/lib/context/products.context";
import { CartProvider } from "~/lib/context/cart.context";

export const meta: MetaFunction = () => {
  return [
    { title: "More than art" },
    { name: "description", content: "Images and artworks" },
  ];
};

export const loader = async () => {
  return json(products)
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  const featuredProduct = getFeaturedProduct(data.products);

  return (
    <div className="h-full grid grid-rows-[auto_1fr] ps-12 pe-12">
      <CartProvider>
        <ProductsProvider products={data.products}>
          <Header />
          <main>
            {
              featuredProduct
                ? <Featured featuredProduct={featuredProduct} />
                : null
            }
            <Products />
          </main>
        </ProductsProvider>
      </CartProvider>
    </div>
  );
}
