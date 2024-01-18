import CEO from '../assets/CEO.png'


export default function Support() {
  return (
        <>
          <div className='px-5 bg-gray-50 flex justify-center items-center py-24 lg:p-20 lg:px-40'>
            <div className='lg:p-20'>
                <h3 className='lg:text-3xl text-2xl font-semibold lg:mb-5 font-serif'>
                  Message From CEO
                </h3>
                <p className='lg:text-xl text-sm font-bold mb-5'>
                      Kim min jao  
                 </p>
                <p className='text-white lg:w-80 w-48  lg:py-5 lg:px-6 bg-slate-950 lg:h-32 rounded-md  shadow-2xl py-1 px-2 absolute  lg:left-96 left-8 z-50  text-xs'>
                We at Bankcorp hope you will understand in using the application swiftly and follow all procedures regarding how we safeguard your finances
                </p>
            </div>
            <div>
                <img src={CEO} alt="" className='shadow-2xl' />
            </div>
          </div>
        </>



  )
}
