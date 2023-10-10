import appLogo from '../../assets/logo.svg'
import cartLogo from '../../assets/cart.svg'

function Header() {
  return (
    <div className='w-full ps-12 pe-12 pt-4'>
      {/* Adding another container for the gray bototm. */}
      <div className='flex justify-between items-center pb-4 border-b-4 border-b-gray-1 border-b-solid'>
        <div className='h-[20px]'>
          <img className='w-full h-full' src={appLogo} alt="" />
        </div>

        <div className='h-[30px] w-[30px]'>
          <img className='w-full h-full' src={cartLogo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header