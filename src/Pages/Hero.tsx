import Appimage from '../assets/Appimage.svg'
import { Link } from 'react-router-dom'


export default function Hero() {
  return (
    <div className=' lg:flex px-6 justify-between py-20  lg:px-72 lg:items-center bg-[#080809]  lg:py-32'>

      <div className='mb-5 '>
          <h5 className='lg:px-2 lg:w-48 w-40 text-center px-2 py-1 font-bold text-xs  bg-blue-100 text-blue-700 rounded-xl'>
              Welcome to Bankcorp
          </h5>
          <h4 className='lg:text-5xl text-4xl mb-3 text-white font-serif lg:mb-5 lg:w-96 '>
            Get to secure your Trustfund with us
          </h4>
          <p className='text-white font-sans text-xs mb-3 lg:w-72 lg:mb-5'>
            If you need any help or assistance in geting hold of your trustfund you can rely on us
          </p>
          <Link  to="/login" >
          
          <button className='px-8  rounded-md text-white py-3 bg-blue-700'>
            View your Trustfund
          </button>  
          </Link>
      </div>          
        <div>
          <img src={Appimage} alt="" className='lg:w-96 lg:h-96 lg:ml-8 ' />
        </div>

    </div>
  )
}
