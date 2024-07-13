import { IconBrandPython, IconFileInfo, IconBrandGithub, IconBrandTypescript, IconBrandHtml5, IconBrandCss3 } from '@tabler/icons-react';
import './projectsSection.css'; // Import the CSS file
import { Grid, Skeleton, Container, Text } from '@mantine/core';
import { BadgeCard } from '../badgeCard/badgeCard';
import memeClickerPng from '../../assets/memeClicker.png'
import pythonChessPng from '../../assets/pythonChess.png'
import MCmodmoverpng from '../../assets/mc mod mover pic.png'
import pythonTetrisPng from '../../assets/python tetris.png'
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
    image: 'https://imgs.search.brave.com/ulh2p_9rYZf2pnTvqxjv9X_Ot2nBpWovN-t79OYrasQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aGF2ZS15b3UtZXZl/ci1zYXQtYmFjay1h/bmQtYXBwcmVjaWF0/ZWQtd2hhdC15b3Ut/aGF2ZS1idWlsdC12/MC12d2Z5YWZ6cGls/YWQxLnBuZz93aWR0/aD02NDAmY3JvcD1z/bWFydCZhdXRvPXdl/YnAmcz1hZjYzNDdi/YWRhYmI0ZjA5Yjg5/YzliZThhNmNjMzdl/N2M0YTNkM2Nj',
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
    image: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp',
    title: 'Portfolio Website',
    description: 'The place you are right now!',
    badges: [{ icon: <IconBrandTypescript size={22}/>, language: 'TypeScript' },
            { icon: <IconBrandHtml5 size={22}/>, language: 'HTML' },
            { icon: <IconBrandCss3 size={22}/>, language: 'CSS' },
            { icon: <IconBrandGithub size={22}/>, language: 'Github' }
            ],
    link: 'https://github.com/Meiscool125/Mantine-Typescript-Portfolio',
  },
  {
    id: "Meme Clicker",
    image: memeClickerPng,
    title: 'Meme Clicker',
    description: 'A game like cookie clicker but with memes.',
    badges: [{ icon: <IconBrandGithub size={22}/>, language: 'Github' },
            { icon: <IconBrandPython size={22}/>, language: 'Python'},
    ],
    link: 'https://github.com/Meiscool125/Meme-Clicker-Game',
  },
  {
    id: "Chess",
    image: pythonChessPng,
    title: 'Chess',
    description: 'Made my own chess game.',
    badges: [{ icon: <IconBrandGithub size={22}/>, language: 'Github' },
            { icon: <IconBrandPython size={22}/>, language: 'Python'},
    ],
    link: 'https://github.com/Meiscool125/ChessButInPython',
  },
  {
    id: "Minecraft Mod Mover",
    image: MCmodmoverpng,
    title: 'Minecraft Mod Mover',
    description: 'Moves Minecraft mods from the downloads folder to the mods folder.',
    badges: [{ icon: <IconBrandGithub size={22}/>, language: 'Github' },
            { icon: <IconBrandPython size={22}/>, language: 'Python'},
    ],
    link: 'https://github.com/Meiscool125/minecraft-mod-mover',
  },
  {
    id: "Tetris",
    image: pythonTetrisPng,
    title: 'Tetris',
    description: 'Simple Tetris clone.',
    badges: [{ icon: <IconBrandGithub size={22}/>, language: 'Github' },
            { icon: <IconBrandPython size={22}/>, language: 'Python'},
    ],
    link: 'https://github.com/Meiscool125/pythonTetris-finished',
  },
  {
    id: "BSS RBC Upgrade Helper",
    image: 'https://imgs.search.brave.com/4VZiGbZmxlfG834MOlvMiu0DTyOsXKEG3ce_7gQqsgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aS1jb21wbGV0ZWQt/MjAtcm91bmRzLW9m/LXJiYy12MC1yN2c2/cWxwbWZ3OGExLnBu/Zz93aWR0aD02NDAm/Y3JvcD1zbWFydCZh/dXRvPXdlYnAmcz0z/NTk5MDVhMWIyMDg1/YzUyZWQ4YzAyOTk0/MjNlNTllNjY4YWZh/ODhl',
    title: 'Tetris',
    description: 'Helps BSS players choose the correct upgrades in a minigame known as "RBC".',
    badges: [{ icon: <IconBrandGithub size={22}/>, language: 'Github' },
            { icon: <IconBrandPython size={22}/>, language: 'Python'},
    ],
    link: 'https://github.com/Meiscool125/bssRBCupgradeHelper',
  },
]

export function ProjectsGrid() {
  const projectGridList = projects.map((project)=>(
    <Grid.Col span={{ xl: 14, lg:6, md: 6, sm: 6, xs: 6 }} key={project.id}>
      <BadgeCard project={project} />
    </Grid.Col>
  ))
  return (
    <div style={{ paddingTop: '20px', textShadow: '3px 3px 70px grey' }}>
      <Text ta="center" size="60px" pb={4} c="rgba(235, 222, 222, 0.767)" variant="gradient" gradient={{ from: 'cyan', to: 'green' }}>Projects</Text>
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