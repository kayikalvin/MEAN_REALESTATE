import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Sign_in';
import Signup from './pages/Sign_up';
import Profile from './pages/Profile';
import About from './pages/About';
import Sign_in from './pages/Sign_in';
import Sign_up from './pages/Sign_up';
import Header from './components/Header';


const App = () => {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sign_in' element={<Sign_in/>}/>
    <Route path='/sign_up' element={<Sign_up/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/about' element={<About/>}/>




  </Routes>
  </BrowserRouter>
}

export default App
