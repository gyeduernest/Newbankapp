import logo from '../assets/Primarylogo.svg'
import Alert from '../assets/Alert.svg'
import Person from '../assets/Person.svg'
import Logout from '../assets/Logout.svg'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Signout from './Signout'



export default function Topnav() {
    


  return (
    <div className='bg-white w-full shadow-sm fixed px-5 lg:px-40 items-center py-5 '>
          <main>
            <nav className='flex items-center justify-between'>
              <Link  to="/homescreen"   >
              <div>
                <img src={logo} alt="" className='lg:h-20 h-12 sm:hidden md-hidden lg:block' />
              </div>              
              </Link>
              <ul className='flex gap-3'>
                <Button variant={"outline"}  className='flex' size={"icon"} >
                  <img src={Alert} alt="" />
               </Button>
                <Button className='flex gap-2'  variant={"outline"} size={"icon"}>
                  <img src={Person} alt="" />
                  <p className='text-xs hidden sm:hidden md:hidden lg:block'>Mayor one</p>
               </Button>
                <Signout/>
              </ul>
            </nav>
          </main>
    </div>
  )
}
