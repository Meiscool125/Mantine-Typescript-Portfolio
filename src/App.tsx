import "@mantine/core/styles.css";
import React, { useEffect, useState } from "react";
import { MantineProvider, Text } from "@mantine/core";
import { theme } from "./theme";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle/ColorSchemeToggle.tsx";
import AboutMe from "./components/aboutMe/aboutMe.tsx";
import { Hero } from "./components/hero/hero.tsx";
import { ProjectsGrid } from "./components/projectsSection/projectsSection.tsx";
import { HeaderSimple } from "./components/headerSimple/HeaderSimple.tsx";
import { UserInfoIcons } from "./components/userInfoIcon/UserInfoIcons.tsx";
//import { WheelComponent } from "./main.tsx"
export default function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.scrollY);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
  <MantineProvider defaultColorScheme="dark" theme={{ fontFamily: "Roboto" }}>
    <Text pl={10} pt={10} pb={50}>Please view this webpage in a resolution of approximately 700x700 (about half the width of your monitor).</Text>
    <HeaderSimple/>
    <Hero/>
    <UserInfoIcons/>
    <AboutMe/>
    <ProjectsGrid/>
    <ColorSchemeToggle />
  </MantineProvider>
  );
}

