import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import React from "react";

import Home from "./Pages/home";
import Plan from "./Pages/plan";
import ContactUs from "./Pages/contactUs";
import EventType from "./Pages/eventType";
// import LandingPage from "./Pages/landing";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1 style={{fontFamily: "Special Elite"}}>Motivv</h1>
          {/* <Link to='/landing'>Landing </Link> */}
          <Link to='/motive-react/'>Home </Link>
          <Link to='/motive-react/plan'>Plan </Link>
          <Link to='/motive-react/help'>Help </Link>
          <Link to="/motive-react/eventType">Event Type</Link>
        </nav>
        <p>Rounter is buggy at the moment</p>
        <Routes>
          {/* <Route path="/landing" element={<LandingPage/>} /> */}
          <Route exact path='/motive-react/' element={<Home />} />   
          <Route path='/motive-react/plan' element={ <Plan />} /> 
          <Route path='/motive-react/help' element={<ContactUs />} />
          <Route path='/motive-react/eventType' element={<EventType />} />
        </Routes>
      </BrowserRouter>
      {/* <EventType /> */}
      {/* <ContactUs /> */}
      {/* <Plan /> */}
    </div>
  );
}

export default App;
