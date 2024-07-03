// Navbar.js
import './aboutMe.css'; // Import the CSS file
import { Text, Center } from '@mantine/core';

const AboutMe = () => {
    return (
      <section id='about'>
      <div className='aboutMe-container' style={{ textShadow: '4px 4px 6px black' }}>
      <Center maw={1920} mah={1080} pt={"md"} pb={"xl"}>
          <Text pr={"30px"} pl={"40px"} fz={40}>About Me</Text>
            <div className="Text" style={{ borderLeft: '4px solid gray', paddingRight: '15px', paddingTop: '5px', paddingBottom: '5px', borderRadius: '30px' }}>
              <Text fz={23} pl={'25px'}>I'm Dathan, a coder who likes to make fun and useful applications.</Text> 
              <Text fz={23} pl={'25px'}></Text> 
              <Text fz={23} pl={'25px'}>I make projects like video games and functional apps.</Text> 
              <Text fz={23} pl={'25px'}>Check them out down below!</Text> 
            </div>
      </Center> 
      </div>
      </section>
    );
  };
  export default AboutMe;