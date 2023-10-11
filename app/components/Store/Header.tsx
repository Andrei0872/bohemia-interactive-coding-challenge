import appLogo from '../../assets/logo.svg'
import cartLogo from '../../assets/cart.svg'
import { useCart } from '~/lib/context/cart.context'
import { getCurrencySymbolFromCode, getImageSrc } from '~/utils/store';
import { useMemo, useState } from 'react';

function Header() {
  const { cartProducts, setIsCartOpen, isCartOpen, clearCart } = useCart();

  const lenCartProducts = cartProducts?.length;

  return (
    <div className='w-full pt-4 flex justify-between items-center pb-4 border-b-4 margin-bottom-delimiter'>
      <div className='h-[20px]'>
        <img className='w-full h-full' src={appLogo} alt="" />
      </div>

      {/* TODO: extract into separate component. */}
      <div className='h-[30px] w-[30px] relative'>
        <img className='w-full h-full' src={cartLogo} alt="" />

        {
          isCartOpen ? (
            cartProducts?.length ? (
              <div className='z-10 bg-[#fff] border-solid border-[4px] border-gray-1 absolute right-0 top-[153%] flex flex-col gap-4 w-[40vw]'>
                <button className='self-end'>
                  <svg width="11" height="11" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L20 20" stroke="black" stroke-width="4" />
                    <path d="M2 20L20 2" stroke="black" stroke-width="4" />
                  </svg>
                </button>

                <ul className='flex flex-col gap-4 margin-bottom-delimiter pb-4'>
                  {
                    cartProducts.map(cp => (
                      <li key={cp.name}>
                        <div className='flex items-center pl-3 pr-3'>
                          <div className='flex flex-col grow'>
                            <span className='font-bold'>{cp.name}</span>
                            <span className='text-gray-4'>
                              {getCurrencySymbolFromCode(cp.currency)}{cp.price}
                            </span>
                          </div>

                          <div className='w-[50%]'>
                            <img className='max-h-[80px] w-full' src={getImageSrc(cp)} alt="" />
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>

                <button onClick={() => { setIsCartOpen(false); clearCart(); }} className='border-[#000] border-solid border-[3px] w-[80%] mx-auto mb-4 pb-[0.4rem] pt-[0.4rem] uppercase'>Clear</button>
              </div>
            ) : <p>No products here.</p>
          ) : null
        }

        {
          lenCartProducts ? (
            <div className='absolute bg-[#000] text-[#fff] w-[11px] h-[11px] flex items-center justify-center p-2 top-[90%] left-[90%]'>{lenCartProducts}</div>
          ) : null
        }
      </div>
    </div>
  )
}

export default Header