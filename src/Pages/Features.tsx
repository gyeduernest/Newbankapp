import Speed from '../assets/speed.svg'
import Security from '../assets/Security.svg'
import Support from '../assets/support.svg'


export default function Features () {
  return (
    <div className='lg:p-10 py-5 '>
          <h3 className='lg:text-3xl text-2xl font-bold text-center lg:w-80 font-serif'>
          The complete financial stack for your business
          </h3>
          <p className='  text-xs mb-10 text-center lg:w-80 px-1'>
          Top-end financial tools to help your business with its financial operations and cash flow.
          We help companies of all types work better, save time and money with a simply better banking service that works.
          </p>

          <div className='lg:flex lg:gap-20 lg:p-3 items-center'>
            <div className='flex lg:gap-4 gap-2 px-8 mb-5 '>
              <img src={Speed} alt="" className='w-10' />
              <div>
                <h3 className='lg:text-xl font-semibold'>
                    Speed
                </h3>
                <p className='text-xs'>
                Open a commercial-grade current account from anywhere in 10 minutes
                </p>
              </div>
            </div>
            <div className='flex lg:gap-4 gap-2 px-8 mb-5'>
              <img src={Support} alt="" className='w-10' />
              <div>
                <h3 className='lg:text-xl font-semibold'>
                    Support
                </h3>
                <p className='text-xs'>
                Get access to a trusted support team and resources whenever you want                </p>
              </div>
            </div>
            <div className='flex lg:gap-4 gap-2 px-8 mb-5'>
              <img src={Security} alt="" className='w-10' />
              <div>
                <h3 className='lg:text-xl font-semibold'>
                    Security
                </h3>
                <p className='text-xs'>
                Rely on bank-grade security with all your monies fully insured by NDIC                </p>
              </div>
            </div>
            
          </div>

          </div>
    
  )
}
