import Topnav from './Topnav'
import Downmenu from './Downmenu'
import Sidemenu5 from './Sidemenu5'
import Processing from '../assets/Pending.svg'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'


export default function Pending() {
  return (
    <>
          <div className="w-full lg:px-40 bg-slate-50 fixed top-0 text-sm  md:w-full">
            <Topnav/>
         </div>
            <Downmenu/>

  <div className="lg:flex justify-center">
  <div className="lg:py-40 py-10 lg:fixed lg:left-5">
    <Sidemenu5/>
  </div>
  <div className='lg:px-40 lg:ml-64 lg:py-40 px-5 '>
    <div className='lg:flex flex md:flex gap-4 justify-center lg:gap-16 py-10  md:gap-10 font-extrabold'>
      <div> Status</div>
      <div>Type</div>
      <div className='md:block hidden lg:block'>Designation</div>
      <div>Amount</div>
      <div>Pay/Cancel</div>
    </div>
    <div className='lg:flex flex gap-6 items-center lg:gap-20 md:flex border-b py-2 bg-slate-50 justify-center md:gap-16'>
      <div><img src={Processing} className='' alt="" /></div>
      <div>Bills</div>
      <div className='md:block hidden lg:block'>Netflix</div>
      <div>$25.00</div>
      <div>
              <AlertDialog>
          <AlertDialogTrigger><Button className='bg-blue-700 text-xs `size={"sm"}`' >Make Payment</Button></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </div>
    </div>

  </div>
  </div>

    </>
  )
}
