import { IconBrandPython, IconFileInfo, IconBrandGithub, IconBrandTypescript, IconBrandHtml5, IconBrandCss3 } from '@tabler/icons-react';
import './projectsSection.css'; // Import the CSS file
import { Grid, Skeleton, Container, Text } from '@mantine/core';
import { BadgeCard } from '../badgeCard/badgeCard';

const child = <Skeleton height={140} radius="md" animate={false} />;



interface badge {
  icon: JSX.Element;
  language: string;
}

export interface project{
  id: string;
  image: string;
  title: string;
  description: string;
  badges: badge[];
  link: string;
}

const projects:project[] = [
  {
    id: "TripSM",
    image: 'https://imgs.search.brave.com/RsEGGX4EHGRrdIHs-S4AoaBVYS65f4e-ozhyi0xwYDs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cTI1bG13NHljc3I5/MS5wbmc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9NGYyYmY3NTVl/YmRjZjFkOTE2NjUx/NzcyOWZkMzg1ZWI3/NjY0ODgwMw',
    title: 'TripSM',
    description: 'Allows users to easily manage their Satisfactory save files.',
    badges: [{ icon: <IconBrandPython size={22}/>, language: 'Python' },
            { icon: <IconFileInfo size={22}/>, language: 'Tkinter' },
            { icon: <IconBrandGithub size={22}/>, language: 'Github' }
            ],
    link: 'https://github.com/Meiscool125/TripSM',
  },
  {
    id: "Portfolio Website",
    image: 'https://imgs.search.brave.com/Io0YVkAOyDce6JQOIrB5znSY9oU2eai8pBQWnZQmpKA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Yy1zaGFycGNvcm5l/ci5jb20vVXBsb2Fk/RmlsZS9NaW5vckNh/dEltYWdlcy8wNjA4/NThBTS5wbmc',
    title: 'Portfolio Website',
    description: 'The place you are right now!',
    badges: [{ icon: <IconBrandTypescript size={22}/>, language: 'TypeScript' },
            { icon: <IconBrandHtml5 size={22}/>, language: 'HTML' },
            { icon: <IconBrandCss3 size={22}/>, language: 'CSS' },
            { icon: <IconBrandGithub size={22}/>, language: 'Github' }
            ],
    link: 'https://github.com/Meiscool125/Mantine-Typescript-Portfolio',
  }
  
]

export function ProjectsGrid() {
  const projectGridList = projects.map((project)=>(
    <Grid.Col span={{ xl: 14, lg:6, md: 6, sm: 6, xs: 6 }} key={project.id}>
      <BadgeCard project={project} />
    </Grid.Col>
  ))
  return (
    <div style={{ paddingTop: '20px', textShadow: '4px 4px 6px black' }}>
      <Text ta="center" size="60px" c="rgba(235, 222, 222, 0.767)">Projects</Text>
      <div style={{ paddingTop: '20px' }}>
        <Container my="md">
          <Grid>
            {projectGridList}
          </Grid>
        </Container>
      </div>
    </div>
  );
}