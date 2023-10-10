import { json } from "@remix-run/node"
import ProductFilters from "./ProductFilters"
import ProductList from "./ProductList"
import products from '../../../data/products.json'
import { useLoaderData } from "@remix-run/react"

export const loader = async () => {
  return json(products)
}

function Products() {
  const data = useLoaderData<typeof loader>();
  const { products } = data;

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center">
        <div className="text-[30px]">
          Photography / <span className="text-gray-2">Premium Photos</span>
        </div>

        <div className='flex gap-3'>
          <div className='flex text-gray-2 items-center gap-1'>
            {/* Importing here so that we can style it directly. */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="#9B9B9B" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_122_12)">
                <path d="M3.64807 14.3734V1.5347L5.90435 3.79098C5.97793 3.86456 6.07296 3.90134 6.17106 3.90134C6.26916 3.90134 6.36419 3.86456 6.43777 3.79098C6.58492 3.64383 6.58492 3.40778 6.43777 3.26063L3.54077 0.363637C3.39976 0.222619 3.15144 0.222619 3.01042 0.363637L0.110362 3.26063C-0.0367873 3.40778 -0.0367873 3.64383 0.110362 3.79098C0.257511 3.93813 0.493562 3.93813 0.640711 3.79098L2.897 1.5347V14.3734C2.897 14.5819 3.0656 14.7505 3.27407 14.7505C3.47946 14.7474 3.64807 14.5788 3.64807 14.3734Z" />
                <path d="M11.4592 14.6367C11.5328 14.7103 11.6278 14.7471 11.7259 14.7471C11.824 14.7471 11.919 14.7103 11.9926 14.6367L14.8896 11.7397C15.0368 11.5926 15.0368 11.3565 14.8896 11.2094C14.7425 11.0622 14.5064 11.0622 14.3593 11.2094L12.103 13.4657V0.626917C12.103 0.418456 11.9344 0.249847 11.7259 0.249847C11.5174 0.249847 11.3488 0.418456 11.3488 0.626917V13.4657L9.09561 11.2094C8.94846 11.0622 8.71241 11.0622 8.56526 11.2094C8.41811 11.3565 8.41811 11.5926 8.56526 11.7397L11.4592 14.6367Z" />
              </g>
              <defs>
                <clipPath id="clip0_122_12">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>

            Sort by
          </div>

          <div className='flex items-center gap-1'>
            Price
            <svg width="11" height="11" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L10 10L18 2" stroke="black" stroke-width="3" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid pt-4 grid-cols-[auto_1fr] gap-6">
        <ProductFilters
          categories={['pet', 'cities', 'nature']}
          priceRanges={['pet', 'cities', 'nature']}
        />

        <ProductList products={products} />
      </div>

      <div>
        1,2,3,4
      </div>
    </section>
  )
}

export default Products