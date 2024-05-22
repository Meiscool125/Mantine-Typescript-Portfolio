import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle/ColorSchemeToggle.tsx";
import AboutMe from "./components/aboutMe/aboutMe.tsx";
import { Hero } from "./components/hero/hero.tsx";
import { ProjectsGrid } from "./components/projectsSection/projectsSection.tsx";
import { HeaderSimple } from "./components/headerSimple/HeaderSimple.tsx"
export default function App() {
  return (
  <MantineProvider defaultColorScheme="dark" theme={{ fontFamily: "Roboto" }}>
    <HeaderSimple/>
    <Hero/>
    <AboutMe/>
    <ProjectsGrid/>

    <ColorSchemeToggle />
  </MantineProvider>
  );
}
