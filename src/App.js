import React, { useState, useRef, useEffect}from "react";
import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import projects
import MusicPLayer from "./pages/MusicPlayer/musicplayer";
import WeatherApp from "./pages/WeatherApp/WeatherApp";

// import components
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import About from "./components/about";
import Projects from "./components/projects";
import ContactForm from "./components/contactme";



function App() {
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();

const callbackFunction = (entries) => {
  const entry = entries[0];
  setMyElementIsVisible(entry.isIntersecting)
}
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.10,}

  useEffect(() => {
    const observer = new IntersectionObserver (callbackFunction, options );
    observer.observe(myRef.current)
  })

  return (
    <div >
      <div>
      < Navbar />
      </div>
      <Router>
        <Routes>
          <Route path="/Portfolio" element= { 
          <div className="main-app">  
          <Landing/>
          <div ref={myRef} className={`${myElementIsVisible ? "info-visible" : "info-hidden"}`}>
          <About/>
          <Projects/>
          <ContactForm/>
          </div>
          </div> } />
          <Route  path="/MusicPlayer" element= { <div ref={myRef}>< MusicPLayer  /></div> } />
          <Route path="/Weather" element= { <div ref={myRef} ><WeatherApp/></div>  } />
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
