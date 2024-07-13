import { Button, Group, rem, useMantineColorScheme, MantineProvider } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" my={rem(80)}>
      <Button onClick={() => setColorScheme('light')}>Light mode (website not designed for light mode)</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark mode</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto mode</Button>
    </Group>
  );
}