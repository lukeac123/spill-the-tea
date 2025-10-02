import { IconMoon, IconSun } from '@tabler/icons-react';
import clsx from 'clsx';
import { Button, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import styles from './ColorSchemeToggle.module.css';

export const ColorSchemeToggle = ({ className }: { className: string }) => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', {
    getInitialValueInEffect: true,
  });

  return (
    <Button
      className={clsx(styles.modeToggle, className)}
      variant="default"
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
    >
      <IconSun style={{ display: 'var(--lightModeToggle-display)' }} />
      <IconMoon style={{ display: 'var(--darkModeToggle-display)' }} />
    </Button>
  );
};
