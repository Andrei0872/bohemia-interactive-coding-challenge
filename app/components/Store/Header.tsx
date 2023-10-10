import appLogo from '../../assets/logo.svg'
import cartLogo from '../../assets/cart.svg'

function Header() {
  return (
    <div className='w-full pt-4 flex justify-between items-center pb-4 border-b-4 margin-bottom-delimiter'>
      <div className='h-[20px]'>
        <img className='w-full h-full' src={appLogo} alt="" />
      </div>

      <div className='h-[30px] w-[30px]'>
        <img className='w-full h-full' src={cartLogo} alt="" />
      </div>
    </div>
  )
}

export default Header