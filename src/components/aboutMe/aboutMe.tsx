// Navbar.js
import React from 'react';
import './aboutMe.css'; // Import the CSS file
import gamingImg from '../../assets/gaming-picture.png'
import codeImg from '../../assets/code-picture.png'
import { Image, Text } from '@mantine/core';

const AboutMe = () => {
    return (
      <section id='about'>
      <div>
      <Text>About Me</Text> 
      <div className='aboutMe-container'>
        <div className="codePicAboutMe">
          <img src={codeImg}
          height={200}
          ></img>
        </div>
        <div className="gamingPicAboutMe">
          <Image src={gamingImg}
          h={200}
          w="auto"
          />
        </div>

        <div>
          
          <Text fz={"xl"} >I'm Dathan, a coder who likes to make</Text> 
          <Text>fun and useful applications.</Text> 
          <Text>I make projects like video games</Text> 
          <Text>and functional apps.</Text> 
          <Text>Check them out down below!</Text> 
        </div>
      </div>
      </div>
      </section>
    );
  };
  export default AboutMe;