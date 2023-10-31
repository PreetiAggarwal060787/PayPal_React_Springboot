import './App.css';
import Business from './Business/Business';
import About from './About/About';
import Contact from './Contact/Contact';
import Crousel from './Crousel/Crousel';
import Homepage from './Homepage/Homepage';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
    <Homepage/>
    
    <BrowserRouter> 
      <Routes>
      <Route path="/homepage" element={<Crousel/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/business" element={<Business/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
 
      </BrowserRouter>
      <Footer/>
    
    </div>
  )
}

export default App;
