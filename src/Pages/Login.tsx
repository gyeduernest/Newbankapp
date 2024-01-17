import { Button } from "@/components/ui/button"
import { useState } from "react"
import { auth } from "../firebaseConfig"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import logo from "../assets/Primarylogo.svg"




export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState(null);


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
    
const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
    
      navigate('/homescreen');
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        setErrorState('Incorrect password. Please try again.');
      } else {
        console.error('Authentication Error:', error);
        setErrorState('Log in failed. Please check your credentials and try again.');
      }
    }


  };

  return (
    <div className="lg:py-20 lg:px-[500px] py-10 px-6 ">
              <div className="">
              <img src={logo} alt=""  className="w-64"/>
              </div>
              <form action="" className='w-72 lg:w-96 lg:py-8 py-5 lg:px-7 px-5 border-2 border-slate-200 rounded-md '>
                <div className="font-bold text-2xl mb-5">
                    Login
                  </div>
                  
            

            <Alert>
              <AlertDescription>
              {errorState && (
              <div className="text-red-600 text-end rounded-md px-3 border py-2 text-xs font-semibold bg-red-100">
                {errorState}
              </div>
            )}
              </AlertDescription>
            </Alert>


            
              <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="companyname@domain.com..."
                  className="mb-5 px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }
                }
                />
              </div>
            </div>

                

              <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Password 
             </label>
              <div className="mt-2">
                <input
                  id="Password"
                  name="Password"
                  type="Password"
                  autoComplete="off"
                  placeholder="insert password given"
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }
                  }
                />
              </div>
            </div>

            <div className="flex justify-center  ">
              <Button onClick={handleLogin} className="bg-blue-700 w-full mt-8 hover:bg-blue-400 focus:ring-4 focus:bg-blue-800">
                Go to Dashboard
              </Button>
            </div>
            

              </form>

    </div>
  )
}
