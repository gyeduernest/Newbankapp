import Appmockup from '../assets/Appmockup.png'



export default function Procedure() {
  return (
    <div className='lg:px-40  px-5'>

      <div>
        <h3 className='font-bold lg:text-3xl text-2xl px-3 text-center'>
        Everything you need, less of what you don't.
        </h3>
      </div>

      <div className='py-10  flex lg:px-20 lg:gap-80'>
        <div className=''>
          
          <div className='p-2  border-l-4 border-slate-400 lg:p-3 hover:bg-slate-50 hover:text-slate-800 mb-5 lg:mb-5'>
            <div className='text-slate-400 hover:text-slate-900'>
            <h4 className=' text-md font-bold'>
              Visit Website
            </h4>
            <p className='text-xs'>
              The first Procedure is to visit the website and know what we do
            </p>
            </div>
          </div>
          <div className='p-2  border-l-4 border-slate-400 lg:p-3 hover:bg-slate-50 hover:text-slate-800 mb-5 lg:mb-5'>
            <div className='text-slate-400 hover:text-slate-900'>
            <h4 className=' text-md font-bold'>
              Make a Request
            </h4>
            <p className='text-xs'>
              Make a request to gain access to the platform
            </p>
            </div>
          </div>
          <div className='p-2  border-l-4 border-slate-400 lg:p-3 hover:bg-slate-50 hover:text-slate-800 mb-5 lg:mb-5'>
            <div className='text-slate-400 hover:text-slate-900'>
            <h4 className=' text-md font-bold'>
              Log in
            </h4>
            <p className='text-xs'>
              Log into the account and begin process to release your trustfund
            </p>
            </div>
          </div>
          

        </div>

        <div className='w-96 lg:h-96  lg:block'>
            <img src={Appmockup} alt="" className='w-64' />
        </div>
      </div>

    </div>
  )
}
