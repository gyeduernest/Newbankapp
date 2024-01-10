import logo from '../assets/Primarylogo.svg'
import Alert from '../assets/Alert.svg'
import Person from '../assets/Person.svg'
import Logout from '../assets/Logout.svg'
import { Button } from '@/components/ui/button'
import Menubutton from '/src/assets/Menubutton.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from 'react-router-dom'
import Close from '/src/assets/Close.svg'


export default function Topnav() {
  return (
    <div className='bg-white w-full shadow-sm fixed px-5 lg:px-40 items-center py-5 '>
          <main>
            <nav className='flex items-center justify-between'>
              <div>
                <img src={logo} alt="" className='h-20 hidden sm:hidden md-hidden lg:block' />
                <div className='block sm:block md:block lg:hidden'>
                <DropdownMenu>
                  <DropdownMenuTrigger><Button variant={"ghost"}><img src={Menubutton} alt="" /></Button></DropdownMenuTrigger>
                  <DropdownMenuContent className=''>
                    <DropdownMenuItem className='flex justify-between font-semibold'>Main Menu <img src={Close} alt="" /> </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                    <Link to="/homescreen" >
                      Home
                    </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <Link to="/trustfund" >
                      Trustfund
                    </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <Link to="/transaction" >
                      Transactions
                    </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>


                </div>

              </div>
              <ul className='flex gap-3'>
                <Button variant={"outline"}  className='flex' size={"icon"} >
                  <img src={Alert} alt="" />
               </Button>
                <Button className='flex gap-2'  variant={"outline"} size={"icon"}>
                  <img src={Person} alt="" />
                  <p className='text-xs hidden sm:hidden md:hidden lg:block'>Mayor one</p>
               </Button>
                <Button className='flex gap-4'  variant={"outline"} size={"icon"}>
                  <img src={Logout} alt="" />
                  <p className='text-red-500 text-xs hidden sm:hidden md:hidden lg:block'> Sign out</p>
               </Button>
              </ul>
            </nav>
          </main>
    </div>
  )
}
