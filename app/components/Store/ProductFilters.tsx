import { ComponentPropsWithRef, useState } from "react"

type Props = ComponentPropsWithRef<'div'> & {
  categories: string[];
  priceRanges: { id: string; name: string }[];

  onCategoryFilterEvent: (c: string) => void;
  onPriceRangeFilterEvent: (id: string) => void;
}

function ProductFilters(props: Props) {
  const [priceRangeFiltersValues, setPriceRangeFiltersValues] = useState<{ [k: string]: boolean }>({});

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 margin-bottom-delimiter pb-4">
        <h3 className="text-[22px] font-bold">Category</h3>

        <ul className="flex flex-col gap-2">
          {
            props.categories.map(c => (
              <li key={c} className="flex items-center gap-3">
                <input onInput={() => props.onCategoryFilterEvent(c)} type="checkbox" name={c} id={c} />
                <label className="capitalize" htmlFor={c}>{c}</label>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <h3 className="text-[22px] font-bold">Price range</h3>

        <ul className="flex flex-col gap-2">
          {
            props.priceRanges.map(c => (
              <li key={c.id} className="flex items-center gap-3">
                <input
                  onChange={() => { props.onPriceRangeFilterEvent(c.id); setPriceRangeFiltersValues({ [c.id]: !priceRangeFiltersValues[c.id] }) }}
                  type="checkbox"
                  name={c.name}
                  id={c.id}
                  checked={!!priceRangeFiltersValues[c.id]}
                />
                <label className="capitalize" htmlFor={c.id}>{c.name}</label>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default ProductFilters