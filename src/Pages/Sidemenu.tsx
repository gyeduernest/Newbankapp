import Home from '../assets/Home.svg'
import Recipients from '../assets/Recipients.svg'
import Process from '../assets/Processdocuments.svg'
import Advice from '../assets/Advice.svg'
import Dollar from '../assets/Dollar.svg'
import Money from '../assets/Money.svg'
import Send from '../assets/Send.svg'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'



export default function Sidemenu() {
  return (
    <div className='hidden sm:hidden md:hidden lg:block py-32 lg:px-20  '>
              <nav className=''>
                <ul>
                    <Link to="/homescreen">
                      <div>
                      <Button className='gap-4 mb-5  w-56 hover:bg-white '  variant={"outline"} size={"lg"}>
                        <img src={Home} alt="" /> 
                        <p className='text-blue-600'>Home</p></Button>
                      </div>
                    </Link>

                    <Link to="/trustfund">
                    
                      <div>
                      <Button className='hover:bg-white gap-4 mb-5  w-56 '  variant={"outline"} size={"lg"}>
                        <img src={Process} alt="" /> 
                        <p className='text-blue-600'>Trust Fund</p></Button>
                      </div>  
                    </Link>

                      <Link  to="/getadvice" >
                      <div>
                      <Button className='gap-4 mb-5  w-56 hover:bg-white '  variant={"outline"} size={"lg"}>
                        <img src={Advice} alt="" /> 
                        <p className='text-blue-600'>Get Advice</p></Button>
                      </div> 
                      </Link> 
                       <Link   to="/transaction">
                       <div>
                        <Button className='gap-4 mb-5  w-56  hover:bg-white'  variant={"outline"} size={"lg"}>
                          <img src={Send} alt="" /> 
                          <p className='text-blue-600'>Transactions</p>
                        </Button>
                        </div>  
                       </Link>
                      <div>
                      <Button className='gap-4 mb-5  w-56  hover:bg-white'  variant={"outline"} size={"lg"}>
                        <img src={Recipients} alt="" /> 
                        <p className='text-blue-600'>Recipients</p></Button>
                      </div>  

                      <div>
                      <Button className='gap-4 mb-5  w-56  hover:bg-white'  variant={"outline"} size={"lg"}>
                        <img src={Dollar} alt="" /> 
                        <p className='text-blue-600'>Account</p></Button>
                      </div>  
                      <div>
                      <Button className='gap-4 mb-5  w-56  hover:bg-white'  variant={"outline"} size={"lg"}>
                        <img src={Money} alt="" /> 
                        <p className='text-blue-600'>Pending Bills</p></Button>
                      </div>  
                      
                </ul>
              </nav>

    </div>
  )
}
