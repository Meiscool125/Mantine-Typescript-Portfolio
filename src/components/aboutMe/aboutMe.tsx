// Navbar.js
import React from 'react';
import './aboutMe.css'; // Import the CSS file
import gamingImg from '../../assets/gaming-picture.png'
import codeImg from '../../assets/code-picture.png'

const AboutMe = () => {
    return (
      <section id='about'>
      <div>
      <div className="TitleText">
      <div className="AboutMe"><h1>About Me</h1></div>
    </div>
      <div className='aboutMe-container'>
        <div className="codePicAboutMe">
          <img src={codeImg}
          height="250"
          ></img>
        </div>
        <div className="gamingPicAboutMe">
          <img src={gamingImg}
          height="250"
          ></img>
        </div>

        <div className="MainText">
          
          <div className="MainText1"><h2>I'm Dathan, a coder who likes to make</h2></div>
          <div className="MainText2"><h2>fun and useful applications with code.</h2></div>
          <div className="MainText3"><h2>I make projects like video games</h2></div>
          <div className="MainText4"><h2>and functional apps.</h2></div>
          <div className="MainText5"><h2>Check them out down below!</h2></div>
        </div>
      </div>
      </div>
      </section>
    );
  };
  export default AboutMe;

  // make a grid, 2x2?
  // top left and bottom right img, others are text
  // idk i have no idea how js works help me