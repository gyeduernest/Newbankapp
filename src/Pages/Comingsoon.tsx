import Comingsoon from '../assets/Comingsoon.png'
import Applestore from '../assets/Appstore.svg'
import Googleplay from '../assets/Googleplay.svg'


export default function Application() {
  return (
    <div className=' flex lg:p-10 py-10 lg:gap-10 lg:justify-center lg:items-center px-5'>
        <div className=' hidden md:block lg:block'>
            <img src={Comingsoon} alt="" className='' />
        </div>
        <div className=' lg:w-96 lg:px-5 lg:h-48 bg-white  rounded-md shadow-2xl py-10'>
          <h3 className='text-xl text-center font-serif font-semibold'>
              Get ready for our application
          </h3>
          <p className='text-sm text-center px-5'>
            We will soon launch a full scale app to enable you do alot of tasks and track your funds at the same time
          </p>
          <div className=' flex lg:py-5 justify-center gap-4'>
            <img src={Googleplay} alt="" className='w-32' />
            <img src={Applestore} alt="" className='w-32' />
            

          </div>
          

        </div>
        

    </div>
  )
}
