// Signout.js
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Import the initialized Firebase instance
import Logout from '../assets/Logout.svg'


const Signout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  // Subscribe to changes in the user's authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log('User signed out successfully.');
      // Redirect to login after signing out
      navigate('/login'); // Replace '/login' with the actual path of your login component
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <>
        <Button className='flex gap-4'  variant={"outline"} size={"icon"}  onClick={handleSignOut} >
                  <img src={Logout} alt="" />
                  <p className='text-red-500 text-xs hidden sm:hidden md:hidden lg:block'> Sign out</p>
          </Button>
    
    </>
  );
};

export default Signout;
