import React,{ useEffect, useRef } from "react";
import heroimage from "../img/img3.png";
import Typed from "typed.js";
const Dashboard = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Developer",
        "Front End Developer",
        "Backend Developer",
      ], // Strings to type
      typeSpeed: 50, // Typing speed
      backSpeed: 30, // Backspacing speed
      backDelay: 1000, // Delay before backspacing
      loop: true, // Loop the typing animation
    });

    // Cleanup function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="hero" id="home">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-sm-12 col-md-6">  
            <div className="hero-content">
              <div className="hero-text">
                <p>I'm</p>
                <h1>Masood Ganai</h1>   
                <h2 ref={typedRef}></h2>
                {/* <div className="typed-text">
                  Web Developer, Front End Developer,Backend Developer
                </div> */}
              </div>
              <div className="hero-btn">
                <a className="btn" href="/contact">
                  Hire Me
                </a>
                <a className="btn" href="/contact">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-sm-12 col-md-6 d-none d-md-block">
            <div className="hero-image">
              <img src={heroimage} alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
