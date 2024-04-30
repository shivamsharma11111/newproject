import React from "react";
import MainNavbar from "./Components/MainNavbar";
import Home from './Pages/Home';
import About from "./Pages/About";  
import OurProject from "./Pages/OurProject";
import Developments from "./Pages/Developments";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import 'animate.css'; 



function App() {
 
  return (
    <>

<BrowserRouter> 
     
    <MainNavbar />

     
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/About' element={<About />} /> 
        <Route exact path='/OurProject' element={<OurProject />} />
        <Route exact path='/Developments' element={<Developments />} /> 
        <Route exact path='/Gallery' element={<Gallery />} />
        <Route exact path='/ContactUs' element={<ContactUs />} /> 
    
      </Routes>

      <Footer />
     
    </BrowserRouter>



     
    </>
  );
}
 

export default App;
