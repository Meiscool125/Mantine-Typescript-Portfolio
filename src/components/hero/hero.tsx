// Navbar.js
import React from 'react';
import './hero.css'; // Import the CSS file
import BlueGeoImage from '../../assets/blue-geometric.png'

const Hero = () => {
    const [activeNav, setActiveNav] = React.useState("#")
    return (
      <div className="heroContainer">
          <div className='mainText'>
            <div className ="mainTextContainer1"><h2>Hello, I'm Dathan.</h2></div>
            <div className ="mainTextContainer2"><h2>I'm a high schooler who's into coding.</h2></div>
            <div className ="mainTextContainer3"><h2>I use coding to make fun projects.</h2></div>
          </div>
          <div className='navLinks'>
            <a href="https://github.com/Meiscool125">My Github</a>
            <a href="#about" onClick={()=>setActiveNav("#about")}>About Me</a>
            <a href="">Projects</a>
          </div>
      </div>
    );
  };
  export default Hero;