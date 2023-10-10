import { ComponentPropsWithRef } from "react";
import { Product } from "~/types/product";
import { getCurrencySymbolFromCode, getImageSrc } from "~/utils/store";

type Props = ComponentPropsWithRef<'div'> & {
  products: Product[];
}

function ProductList(props: Props) {
  const { products } = props;

  return (
    <ul className="flex flex-wrap gap-6 items-center">
      {
        products.map(p => (
          <li className="" key={p.name}>
            {/* Could extract if further in a `ProductCard` component. */}
            <div>
              <div className="w-[282px] h-[450px]">
                <img className="h-full w-full" src={getImageSrc(p)} alt="" />
              </div>
              <div>
                <div className="font-bold text-gray-dark-1 capitalize">{p.category}</div>
                <div className="font-bold text-xl">{p.name}</div>
                <div className="text-gray-dark-1">{getCurrencySymbolFromCode(p.currency)}{p.price}</div>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default ProductList