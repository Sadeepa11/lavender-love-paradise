// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './viwes/Home';
import FlowerSlider from './viwes/FlowerSlider';
import FlowerNav from './components/NavBar';
import AboutUs from './viwes/AboutUs';
import ContactPage from './viwes/Contact';


function App() {


  return (
    <>
<Router>
   
   <div>

   <FlowerNav/>
     <Routes>


       <Route path="/" element={<Home/>} />
       <Route path="/Flowers" element={<FlowerSlider/>} />
       <Route path="/About" element={<AboutUs/>} />
       <Route path="/Contact" element={<ContactPage/>} />
     </Routes>
   
   </div>
 </Router>
    </>
  )
}

export default App
