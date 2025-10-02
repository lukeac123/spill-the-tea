'use client';

import { Title } from '@mantine/core';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import styles from './AppHeader.module.css';

export const AppHeader = () => {
  return (
    <header className={styles.appHeader}>
      <Title>Spill The Tea</Title>
      <ColorSchemeToggle className={styles.colorSchemeToggle} />
    </header>
  );
};
