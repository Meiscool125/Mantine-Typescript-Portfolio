import { Card, Image, Text, Group, Badge, Button } from '@mantine/core';
import classes from './badgeCard.module.css';
import { project } from '../projectsSection/projectsSection';

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
        <Button radius="md" style={{ flex: 1 }} component='a' href={project.link} target="_blank">
          Go to project
        </Button>
      </Group>
    </Card>
    </div>
  );
}