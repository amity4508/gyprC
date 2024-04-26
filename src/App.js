import React, {useState,useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home/Home';
import { LandingPLayouts } from './Components/Layouts/LandingPLayouts';
import { UserRoute } from './Routing/Routing';
import { Loader } from "./Components/Loader/loader";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading with a delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up timeout on unmount
    return () => clearTimeout(timeout);
  }, []);
  return (
  <>

<div className="relative">
      {/* Loader */}
      {isLoading && <Loader />}

      {/* Page content */}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        {/* Your static website content goes here */}
        <div  className='bg-white'>
 <UserRoute/>
 </div>
      </div>
    </div>
  

  </>
  );
}

export default App;
