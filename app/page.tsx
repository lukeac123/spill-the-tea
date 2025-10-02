'use client';

import { createContext, useState } from 'react';
import { AppHeader, Form, SpillTheTeaSVG } from '@/components';
import styles from './page.module.css';

export const CurrentUser = createContext({});

export default function HomePage() {
  const [user, setUser] = useState(null);

  return (
    <>
      <AppHeader />
      <CurrentUser.Provider value={{ user, setUser }}>
        {user ? (
          <div className={styles.container}>Your Events</div>
        ) : (
          <div className={styles.container}>
            <SpillTheTeaSVG className={styles.img} />
            <Form />
          </div>
        )}
      </CurrentUser.Provider>
    </>
  );
}
