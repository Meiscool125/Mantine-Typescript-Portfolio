import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle/ColorSchemeToggle.tsx";
import AboutMe from "./components/aboutMe/aboutMe.tsx";
import Hero from "./components/hero/hero.tsx";
import Navbar from "./components/nav-bar/nav-bar.tsx";
import {ProjectsGrid} from "./components/projectsSection/projectsSection.tsx";
import {BadgeCard} from "./components/badgeCard/badgeCard.tsx";
export default function App() {
  return (
  <MantineProvider defaultColorScheme="dark">
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <ProjectsGrid/>
    <BadgeCard/>

    <ColorSchemeToggle />
  </MantineProvider>
  );
}
