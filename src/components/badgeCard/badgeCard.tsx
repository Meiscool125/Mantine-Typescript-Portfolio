import { IconBrandPython } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './badgeCard.module.css';
import { project } from '../projectsSection/projectsSection';


// const mockdata = {
//   image:
//     'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
//   title: 'Verudela Beach',
//   country: 'Croatia',
//   description:
//     'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.',
//   badges: [
//     { emoji: '☀️', label: 'Sunny weather' },
//     { emoji: '🦓', label: 'Onsite zoo' },
//     { emoji: '🌊', label: 'Sea' },
//     { emoji: '🌲', label: 'Nature' },
//     { emoji: '🤽', label: 'Water sports' },
//   ],
// };


interface badgeCardProps {
  project: project;
}

export function BadgeCard({ project }: badgeCardProps) {
  const projectBadges = project.badges.map((badge) => (
    <Badge variant="light" style={{ fontSize: "12px", padding: "12px 8px" }} key={badge.language} leftSection={badge.icon}>
      {badge.language}
    </Badge>
  ));

  return (
    <div id="projects">
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={project.image} alt={project.title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {project.title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs">
          {project.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Technologies Used:
        </Text>
        <div className='badgeContainer'>
          <Group gap={7} mt={5}>
            {projectBadges}
          </Group>
        </div>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
      </Group>
    </Card>
    </div>
  );
}