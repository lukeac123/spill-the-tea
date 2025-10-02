import { Title } from '@mantine/core';
import { Form } from '@/components/Form';
import { AppHeader, SpillTheTeaSVG } from '../components';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <SpillTheTeaSVG className={styles.img} />
        <Form />
      </div>
    </>
  );
}
