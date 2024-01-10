import Topnav from './Topnav'
import Sidemenu from './Sidemenu'
import Homescreen from './Homescreen'

export default function Dashboard() {
  return (
    <div>
           <Topnav/>
           
           <div className="lg:flex justify-center lg:px-20 px-10 gap-20 ">
              <div className=''>
              <Sidemenu/>
              </div>
               <Homescreen/>
           </div>
          

    </div>
  )
}
