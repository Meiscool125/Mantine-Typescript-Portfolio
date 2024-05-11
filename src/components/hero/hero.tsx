// Navbar.js
import React from 'react';
import { MantineProvider, Text } from "@mantine/core";
import './hero.css'; // Import the CSS file
import { HoverableText } from '../hoverableText/hoverableText';

const Hero = () => {
    const [activeNav, setActiveNav] = React.useState("#")
    return (
      <MantineProvider theme={{ fontFamily: "Freeman" }}>
      <div>
          <div>
            <Text>Hello, I'm Dathan.</Text>
            <Text>I'm a high schooler who's into coding.</Text>
            <Text>I use coding to make fun projects.</Text>
          </div>
          <div>
            <a href="https://github.com/Meiscool125" target="_blank"><HoverableText defaultColor="#ebdedec4" hoverColor="#ebdede7a">My Github</HoverableText></a>
            <a href="#about" onClick={()=>setActiveNav("#about")}><HoverableText defaultColor="#ebdedec4" hoverColor="#ebdede7a">About Me</HoverableText></a>
            <a href="#projects"><HoverableText defaultColor="#ebdedec4" hoverColor="#ebdede7a">Projects</HoverableText></a>
          </div>
      </div>
      </MantineProvider>
    );
  };
  export default Hero;