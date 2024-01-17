import Topnav from './Topnav'
import Downmenu from './Downmenu'
import Sidemenu5 from './Sidemenu5'

export default function Pending() {
  return (
    <>
          <div className="w-full lg:px-40 bg-slate-50 fixed top-0 text-sm  md:w-full">
            <Topnav/>
         </div>
            <Downmenu/>

  <div className="lg:flex justify-center">
  <div className="py-40 lg:fixed left-20">
    <Sidemenu5/>
  </div>
  <div className='lg:px-40  lg:py-40 px-5'>
    pending
  </div>
  </div>

    </>
  )
}
