import Primarylogo from '../assets/Primarylogo.svg'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div>
          <header className='bg-[#060809] lg:p-5 lg:px-40  fixed w-full '>
            <nav className='flex justify-between items-center text-white'>
              <div className=''>
              <ul className='flex gap-8 items-center'>
                  <li><img src={Primarylogo} alt="" /></li>
                  <li className='hidden sm:hidden md:hidden lg:block'>Home</li>
                  <li className='hidden sm:hidden md:hidden lg:block'>About</li>
                  <li className='hidden sm:hidden md:hidden lg:block '>Features</li>
                  <li className='hidden sm:hidden md:hidden lg:block'>Testimonials</li>
                  <li className='hidden sm:hidden md:hidden lg:block'>Contact</li>
              </ul>
              </div>
              <div className='p-5'>
              <Link  to="/login" >
              <button className='px-8 bg-blue-700 py-2 rounded-md'>
                    Log in
              </button>
              </Link>
              </div>
            </nav>
          </header>
    </div>
  )
}
