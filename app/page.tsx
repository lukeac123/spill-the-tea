import { Button, Checkbox, Group, Text, TextInput, Title } from '@mantine/core';
import { Form } from '@/components/Form';
import { AppHeader } from '../components';

import './styles.css';

export default function HomePage() {
  return (
    <>
      <AppHeader />
      <div className="container">
        <Title>Spill The Tea</Title>
        <Text>Enter your details to start chatting</Text>
        <Form />
      </div>
    </>
  );
}
