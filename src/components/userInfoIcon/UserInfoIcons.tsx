import { Avatar, Text, Group, Center, Card } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import classes from './UserInfoIcons.module.css';

export function UserInfoIcons() {
return (
    <Center maw={1920} mah={1080} pt={"50px"} pb={"10px"}>
    <Card withBorder radius="lg" p="md">
    <div>
    <Group wrap="nowrap">
        <Avatar
        src="src\assets\glorious blue eyed king cropped.jpg"
        size={94}
        radius="md"
        />
        <div>
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Software engineer
        </Text>

        <Text fz="lg" fw={500} className={classes.name}>
            Dathan Kenworthy
        </Text>

        <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
            dathan.kenworthy@gmail.com
            </Text>
        </Group>

        <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
            +1 (470) 556-3528
            </Text>
        </Group>
        </div>
    </Group>
    </div>
    </Card>
    </Center>

);
}