import React from "react";
import "./Hero.css";

const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <div className="container">
        <div className="winningNumber">
          <p>{window.token}</p>
        </div>
        <div>
          <p>TESTING TESTING TESTING</p>
        </div>
        <div>
          <p>TESTING TESTING TESTING</p>
        </div>
        <div>
          <p>TESTING TESTING TESTING</p>
        </div>
        <div>
          <p>TESTING TESTING TESTING</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
