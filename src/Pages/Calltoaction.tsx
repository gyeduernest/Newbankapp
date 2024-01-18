import { Link } from "react-router-dom"
export default function Calltoaction() {
  return (
    <div className=' flex justify-center items-center text-white py-16 bg-[#060809]'>

      <div>
      <h3 className='text-4xl mb-5 font-semibold text-center'>
        You can start the Process from here
      </h3>
      <p className='text-sm mb-3 text-center px-5'>
        You will have to log in your account details in order to start the procedure
      </p>
      <div className='flex justify-center'>
      <Link  to="/login" >
          
        <button className='px-5 py-3 bg-blue-600 text-white rounded-md'>
        Click here to start Process
         </button>
          </Link>
      </div>
      </div>


    </div>
  )
}
