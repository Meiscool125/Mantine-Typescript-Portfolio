// Navbar.js
import './aboutMe.css'; // Import the CSS file
import { Text, Center } from '@mantine/core';

const AboutMe = () => {
    return (
      <section id='about'>
      <div className='aboutMe-container'>
        <Center maw={400} h={40}>
          <Text fz={40}>About Me</Text>
        </Center> 
          <div>
            <div className="Text">
              <Text fz={25} >I'm Dathan, a coder who likes to make</Text> 
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