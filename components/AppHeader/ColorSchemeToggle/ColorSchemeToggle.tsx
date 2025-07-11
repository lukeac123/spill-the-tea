import { IconMoon, IconSun } from '@tabler/icons-react';
import { Button, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

import './ColorSchemeToggle.component.css';

export const ColorSchemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', {
    getInitialValueInEffect: true,
  });

  return (
    <Button
      className="modeToggle"
      variant="default"
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
    >
      <IconSun style={{ display: 'var(--lightModeToggle-display)' }} />
      <IconMoon style={{ display: 'var(--darkModeToggle-display)' }} />
    </Button>
  );
};
