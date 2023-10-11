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
          <li className="relative" key={p.name}>
            {/* Could extract if further in a `ProductCard` component. */}
            <div className="group">
              <div className="relative w-[282px] h-[450px]">
                <img className="h-full w-full" src={getImageSrc(p)} alt="" />
                <button className="hidden group-hover:block absolute uppercase bottom-0 left-0 right-0 bg-[#000] text-[#fff] pt-1 pb-1">Add to cart</button>
              </div>

              <div>
                <div className="font-bold text-gray-dark-1 capitalize">{p.category}</div>
                <div className="font-bold text-xl">{p.name}</div>
                <div className="text-gray-dark-1">{getCurrencySymbolFromCode(p.currency)}{p.price}</div>
              </div>
            </div>

            {
              p.bestseller ? (
                <div className="absolute top-0 left-0 bg-[#fff] text-[#000] ps-1 pe-1">Best Seller</div>
              ) : null
            }
          </li>
        ))
      }
    </ul >
  )
}

export default ProductList