import { json, type MetaFunction } from "@remix-run/node";
import products from '../../data/products.json'
import { useLoaderData } from "@remix-run/react";
import Header from "~/components/Store/Header";
import Featured from "~/components/Store/Featured";
import Products from "~/components/Store/Products";

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

  return (
    <div className="h-full grid grid-rows-[auto_1fr]">
      <Header />
      <main>
        <Featured />
        <Products />
      </main>
    </div>
  );
}
