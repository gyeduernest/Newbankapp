
import Topnav from "./Topnav"
import Downmenu from "./Downmenu"
import Sidemenu3 from "./Sidemenu3"
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
import { Button } from "@/components/ui/button"
import Avatar1 from '../assets/Avatar1.png'
import Deposit from '../assets/Deposit.svg'
import leave from '../assets/leave.svg'
import locklight from '../assets/Locklight.svg'




export default function Transaction() {
  return (

    <>
        <div className="w-full lg:px-40 bg-slate-50 fixed top-0 text-sm  md:w-full">
    <Topnav/>
      </div>
      <Downmenu/>
    
      <div className="lg:flex  justify-center">
      <div className="lg:py-40  lg:fixed left-5">
        <Sidemenu3/>
      </div>
      <div className="lg:px-40 py-32 lg:ml-64 lg:py-40 px-5 ">
        <div className="    mb-10 text-2xl font-medium flex justify-between">
                    <AlertDialog>
              <AlertDialogTrigger><Button  className="bg-gray-500 flex gap-2"   > <img src={locklight} alt="" /> Receive Money</Button></AlertDialogTrigger>
              <AlertDialogContent className="bg-red-50 text-red-700">
                <AlertDialogHeader>
                  <AlertDialogTitle>Account has been locked</AlertDialogTitle>
                  <AlertDialogDescription className="text-red-600">
                    All your assets are locked you can begin the release of funds by clicking on continue
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-blue-700">Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
                    <AlertDialog>
              <AlertDialogTrigger><Button  className="bg-gray-500 flex gap-2"><img src={locklight} alt="" />Send Money</Button></AlertDialogTrigger>
              <AlertDialogContent className="bg-red-50 text-red-700">
                <AlertDialogHeader>
                  <AlertDialogTitle>Account has been locked</AlertDialogTitle>
                  <AlertDialogDescription className="text-red-600">
                    All your assets are locked you can begin the release of funds by clicking on continue
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-blue-700">Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          
        </div>
            <div className="flex lg:gap-16 justify-between bg-green-50 border-b-2 py-5 b w-full px-2  items-center  hover:bg-slate-50">
            <div>
              <img src={Avatar1} alt="" />
            </div>
            <div>
              <p> Name</p>
            </div>
            <div>
              Description
            </div>
            <div>
              <p> 15$</p>
            </div>
            <div>
            <img src={Deposit} alt="" />
            </div>
            </div>
            <div className="lg:gap-16 justify-between flex bg-green-50 border-b-2 py-5 b w-full px-2  items-center  hover:bg-slate-50">
            <div>
              <img src={Avatar1} alt="" />
            </div>
            <div>
              <p> Name</p>
            </div>
            <div>
              Description
            </div>
            <div>
              <p> 15$</p>
            </div>
            <div>
            <img src={Deposit} alt="" />
            </div>
            </div>
            <div className="lg:gap-16 justify-between flex bg-green-50 border-b-2 py-5 b w-full px-2  items-center  hover:bg-slate-50">
            <div>
              <img src={Avatar1} alt="" />
            </div>
            <div>
              <p> Name</p>
            </div>
            <div>
              Description
            </div>
            <div>
              <p> 15$</p>
            </div>
            <div>
            <img src={Deposit} alt="" />
            </div>
            </div>
            <div className="lg:gap-16 justify-between flex bg-red-50 border-b-2 py-5 b w-full px-2  items-center  hover:bg-slate-50">
            <div>
              <img src={Avatar1} alt="" />
            </div>
            <div>
              <p> Name</p>
            </div>
            <div>
              Description
            </div>
            <div>
              <p> 15$</p>
            </div>
            <div>
            <img src={leave} alt="" />
            </div>
            </div>
            <div className="lg:gap-16 justify-between flex bg-green-50 border-b-2 py-5 b w-full px-2  items-center  hover:bg-slate-50">
            <div>
              <img src={Avatar1} alt="" />
            </div>
            <div>
              <p> Name</p>
            </div>
            <div>
              Description
            </div>
            <div>
              <p> 15$</p>
            </div>
            <div>
            <img src={Deposit} alt="" />
            </div>
            </div>
            <div className="lg:gap-16 justify-between bg-red-50 flex border-b-2 py-5 b w-full px-2  items-center  hover:bg-slate-50 ">
            <div>
              <img src={Avatar1} alt="" />
            </div>
            <div>
              <p> Name</p>
            </div>
            <div>
              Description
            </div>
            <div>
              <p> 15$</p>
            </div>
            <div>
            <img src={leave} alt="" />
            </div>
            </div>
            <div className="lg:gap-16 justify-between flex bg-green-50 border-b-2 py-5 b w-full px-2  items-center  hover:bg-slate-50">
            <div>
              <img src={Avatar1} alt="" />
            </div>
            <div>
              <p> Name</p>
            </div>
            <div>
              Description
            </div>
            <div>
              <p> 15$</p>
            </div>
            <div>
            <img src={Deposit} alt="" />
            </div>
            </div>
            <div className="lg:gap-16 justify-between bg-red-50 flex border-b-2 py-5 b w-full px-2  items-center hover:bg-slate-50 ">
            <div>
              <img src={Avatar1} alt="" />
            </div>
            <div>
              <p> Name</p>
            </div>
            <div>
              Description
            </div>
            <div>
              <p> 15$</p>
            </div>
            <div>
            <img src={leave} alt="" />
            </div>
            </div>
            <div className="bg-red-50 flex border-b-2 py-5 b w-full px-2  items-center lg:gap-16 justify-between hover:bg-slate-50 ">
            <div>
              <img src={Avatar1} alt="" />
            </div>
            <div>
              <p> Name</p>
            </div>
            <div>
              Description
            </div>
            <div>
              <p> 15$</p>
            </div>
            <div>
            <img src={leave} alt="" />
            </div>
            </div>
          </div>
          </div>
            
            

      
    </>


          
          
  )
}
