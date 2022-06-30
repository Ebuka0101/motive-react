import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import React from "react";

import Home from "./Pages/home";
import Plan from "./Pages/plan";
import ContactUs from "./Pages/contactUs";
import EventType from "./Pages/eventType";
import LandingPage from "./Pages/landing";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1 style={{fontFamily: "Special Elite"}}>Motivv</h1>
          {/* <Link to='/landing'>Landing </Link> */}
          <Link to='.'>Home </Link>
          <Link to='/plan'>Plan </Link>
          <Link to='/help'>Help </Link>
          <Link to="/eventType">Event Type</Link>
        </nav>
        <Routes>
          {/* <Route path="/landing" element={<LandingPage/>} /> */}
          <Route path="." element={<Home/>} />   
          <Route path="/plan" element={ <Plan />} /> 
          <Route path="/help" element={<ContactUs/>} />
          <Route path="/eventType" element={<EventType/>} />
        </Routes>
      </BrowserRouter>
      {/* <EventType /> */}
      {/* <ContactUs /> */}
      {/* <Plan /> */}
    </div>
  );
}

export default App;
