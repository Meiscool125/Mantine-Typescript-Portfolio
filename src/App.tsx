import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle/ColorSchemeToggle.tsx";
import AboutMe from "./components/aboutMe/aboutMe.tsx";
import Hero from "./components/hero/hero.tsx";
import Navbar from "./components/nav-bar/nav-bar.tsx";
import {ProjectsGrid} from "./components/projectsSection/projectsSection.tsx";
import ResizeButton from "./components/resizeButton/resizeButton";
export default function App() {
  return (
  <MantineProvider defaultColorScheme="dark">
    <ResizeButton width={1075} height={998}/>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <ProjectsGrid/>
    

    <ColorSchemeToggle />
  </MantineProvider>
  );
}
