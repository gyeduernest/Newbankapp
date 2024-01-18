import CTO from '../assets/CTO.png'
import { Link } from 'react-router-dom'



export default function Contact() {

const onAlert = () =>{
  alert("Request sent successfully feedback to be received shortly")
}

  return (
    <div className=' lg:flex py-20 lg:gap-8 lg:px-96 mx-auto lg:p-20'>
      <div className='px-3 lg:flex  lg:justify-center lg:gap-8 lg:items-center'>
      <form action="" className=' mb-5 border p-5 rounded-md lg:py-10 py-5 lg:p-5 lg:w-96 w-80 px-5 bg-white shadow-md justify-center mx-auto'>
            <h5 className='lg:text-2xl font-semibold mb-2'>
              Talk to us
            </h5>
            <p className=' text-sm mb-5 pr-12'>
              You can fill this form if you want 
              to ask any questions and be 
              rest assured our team will get back to you
            </p>
            <div className='mb-5'>
                 <label htmlFor="fullname">Enter Full name</label>
                 <br />
                 <input type="text" name='full name' placeholder='fullname' className='border  w-full h-12 p-3 rounded-md' />
            </div>
            <div className='mb-5'>

                <label htmlFor="email">Insert email address</label>
                  <br />
                <input type="email" name='email' placeholder='example@.com.....' className='w-full h-12 p-3 rounded-md border' />
            </div>
            <div className='mb-5'>
                <label htmlFor="question">Ask your question</label>
                  <br />
                <input type="text" name='question' placeholder='ask your questions' className='w-full h-12 p-3 border rounded-md' />
           </div>
            <button className='shadow-md flex justify-center mx-auto w-full bg-indigo-600 text-white hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 px-5 py-2 rounded-md' type='submit' onClick={onAlert} >
                Get Enquiries
            </button>
          </form>
          <img src={CTO} alt="" className='lg:w-96 lg:h-96' />  
      </div>         
      
    </div>
  )
}
