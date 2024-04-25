import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home/Home';
import { LandingPLayouts } from './Components/Layouts/LandingPLayouts';
import { UserRoute } from './Routing/Routing';
function App() {
  return (
  <>
 <div  className='bg-white'>
 <UserRoute/>
 </div>
  </>
  );
}

export default App;
