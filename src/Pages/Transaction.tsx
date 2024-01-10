
import { Button } from "@/components/ui/button"
import Avatar1 from '/src/assets/Avatar1.png'



export default function Transaction() {
  return (
    <div className="lg:py-28 md:py-24 py-24 px-5">
          
          <div className=" 
          bg-white lg:p-5 md:p-5 border rounded-md mb-10 md:mb-10 md:mt-5  lg:mt-5 lg:mb-10 " >
              <div className="lg:w-[500px] w-full mt-10 lg:mt-0 p-3  rounded-md">
                  <h3 className="">
                    Latest transactions
                  </h3>
                  <div className="px-2 flex mt-2 border-b-2  hover:bg-slate-50 py-2 justify-between ">
                      <img src={Avatar1} alt="" />
                      <div>
                        <h3 className="text-sm"> Vharies wan</h3>
                        <p className="text-xs text-slate-500 font-semibold">For food</p>
                      </div>
                  <div>
                    $15
                  </div>
                  </div>


                  <div className="px-2 flex mt-2 hover:bg-slate-50 py-2 justify-between rounded-md">
                      <img src={Avatar1} alt="" />
                      <div>
                        <h3 className="text-sm"> Vharies wan</h3>
                        <p className="text-xs text-slate-500 font-semibold">For food</p>
                      </div>
                  <div>
                    $15
                  </div>
                  </div>
                  <div className="px-2 flex mt-2 hover:bg-slate-50 py-2 justify-between rounded-md">
                      <img src={Avatar1} alt="" />
                      <div>
                        <h3 className="text-sm"> Vharies wan</h3>
                        <p className="text-xs text-slate-500 font-semibold">For food</p>
                      </div>
                  <div>
                    $15
                  </div>
                  </div>
                  {/* <div className="flex">
                    <Button className="bg-blue-700 hover:bg-blue-500 w-full">show more</Button>
                  </div> */}

              </div>
              </div>
              
            </div>
          
          
  )
}
