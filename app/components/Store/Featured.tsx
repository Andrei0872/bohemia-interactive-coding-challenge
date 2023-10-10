import { ComponentPropsWithoutRef } from "react"
import { Product } from "~/types/product"
import { convertBytesToMb } from "~/utils/convertions";

type Props = ComponentPropsWithoutRef<'section'> & {
  featuredProduct: Product;
}

const getImageSrc = (p: Product) => {
  return typeof p.image === 'string' ? p.image : p.image.src;
}

function Featured(props: Props) {
  const { featuredProduct: fp } = props;

  console.log(fp);

  return (
    <section className="mt-8 margin-bottom-delimiter pb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{fp.name}</h2>

        {/* TODO: use props. */}
        <button className="uppercase text-base text-[#fff] bg-[#000] ps-6 pe-6 pt-[0.2rem] pb-[0.2rem]">Add to cart</button>
      </div>

      <div className="mt-4 relative">
        <img src={getImageSrc(fp)} alt="Featured image" />
        <div className="absolute left-0 bottom-0 bg-[#fff] text-[#000] text-[14px] p-[1rem] font-bold">Photo of the day</div>
      </div>

      <section className="flex justify-between mt-4 flex-item-equal-size">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-[22px]">About the {fp.name}</div>
          <div className="font-bold text-gray-dark-1 capitalize text-[22px]">{fp.category}</div>
          <div className="text-gray-dark-1 text-[18px]">{fp.details?.description}</div>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="text-[22px] font-bold text-right">People also buy</h4>
          <ul className="flex gap-6 justify-end">
            {
              fp.details?.recommendations.map((r, i) => (
                <li key={i} className="w-[117px] h-[147px]">
                  <img className="w-full h-full" src={r.src} alt="" />
                </li>
              ))
            }
          </ul>
          <div className="self-end">
            <div className="text-[22px] font-bold text-right">Details</div>
            <div className="text-gray-dark-1 text-right">
              <div>Size: {fp.details?.dimmentions.width} x {fp.details?.dimmentions.height} pixels</div>
              <div>Size: {convertBytesToMb(fp.details?.size)} mb</div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Featured