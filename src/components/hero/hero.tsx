// Navbar.js
// import React from 'react';
// import { MantineProvider, Text } from "@mantine/core";
// import './hero.css'; // Import the CSS file
// import { HoverableText } from '../hoverableText/hoverableText';

// const Hero = () => {
//     const [activeNav, setActiveNav] = React.useState("#")
//     return (
//       <MantineProvider theme={{ fontFamily: "Freeman" }}>
//       <div>
//           <div>
//             <Text>Hello, I'm Dathan.</Text>
//             <Text>I'm a high schooler who's into coding.</Text>
//             <Text>I use coding to make fun projects.</Text>
//           </div>
//           <div>
//             <a href="https://github.com/Meiscool125" target="_blank"><HoverableText defaultColor="#ebdedec4" hoverColor="#ebdede7a">My Github</HoverableText></a>
//             <a href="#about" onClick={()=>setActiveNav("#about")}><HoverableText defaultColor="#ebdedec4" hoverColor="#ebdede7a">About Me</HoverableText></a>
//             <a href="#projects"><HoverableText defaultColor="#ebdedec4" hoverColor="#ebdede7a">Projects</HoverableText></a>
//           </div>
//       </div>
//       </MantineProvider>
//     );
//   };
//   export default Hero;

import { Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import classes from './HeroTitle.module.css';

export function Hero() {
    return (
    <div className={classes.wrapper}>
        <Container mx={0} px={10} size={700} className={classes.inner}>
        <h1 className={classes.title}>
            <Text ta="left"component="span" variant="gradient" gradient={{ from: 'yellow', to: 'pink' }} inherit>
            Hey, I'm Dathan https://ui.mantine.dev/category/headers/
            </Text>{' '}
        </h1>

        <Text className={classes.description} color="dimmed">
        I'm a high schooler who codes fun and useful projects.
        </Text>

        <Group className={classes.controls}>

            <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            className={classes.control}
            leftSection={<GithubIcon size={20} />}
            variant="gradient"
            gradient={{ from: 'blue', to: 'rgba(0, 183, 255, 1)' }}
            >
            GitHub
            </Button>

            <Button
            size="xl"
            variant='default'
            className={classes.control}
            >
            About Me
            </Button>

            <Button
            size="xl"
            variant='default'
            className={classes.control}
            >
            Projects
            </Button>
        </Group>
        </Container>
    </div>
    );
}