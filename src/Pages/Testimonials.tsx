import Quotes from '../assets/Quotes.svg'
import Mary from '../assets/Mary.png'
import Star from '../assets/Stars.svg'

export default function Testimonials() {
  return (
    <div className='bg-[#060809] lg:p-10 lg:px-40 p-5'>
      <h3 className='text-white text-3xl mb-10 font-semibold font-serif'>
          Listen to what our clients are saying
      </h3>
        <div className="lg:flex px-8 lg:gap-8 justify-center items-center ">
        <div  className='w-72 h-96 bg-white rounded-md mb-5'>
        <div>
          <img src={Quotes} alt="" />
        </div>
        <div className='p-5'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis dignissimos odio quidem repellat expedita reiciendis sint eos optio, sed, aut veritatis maxime alias consequatur. Quis repudiandae nostrum facilis necessitatibus ratione.
          </p>
          <hr />
          <div className='flex items-center'>
            <img src={Mary} alt="" />
            <div>
            <p>Anna Marrie</p>
            <img src={Star} alt="" />
            </div>
          </div>
        </div>

        </div>
        
        </div>


    </div>
  )
}
