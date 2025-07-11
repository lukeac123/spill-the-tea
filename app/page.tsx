'use client';

import { Button, Checkbox, Group, Text, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form'; //TODO: needs to be on the client side, try to separate
import { AppHeader } from '../components';

import './styles.css';

export default function HomePage() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: undefined,
      email: undefined,
      termsOfService: false,
    },

    validate: {
      name: (value: string) => (value ? null : 'Invalid Name'),
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <>
      <AppHeader />
      <div className="container">
        <Title>Spill The Tea</Title>
        <Text>Enter your details to start chatting</Text>
        <form
          className="form"
          onSubmit={form.onSubmit((values: string, event) => {
            console.log(
              values, // <- form.getValues() at the moment of submit
              event // <- form element submit event
            );
          })}
        >
          <div className="formInputs">
            <TextInput
              withAsterisk
              label="Name"
              placeholder="JohnDoe"
              key={form.key('name')}
              {...form.getInputProps('name')}
            />
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              key={form.key('email')}
              {...form.getInputProps('email')}
            />
            <TextInput
              withAsterisk
              label="Location"
              placeholder="City"
              key={form.key('location')}
              {...form.getInputProps('location')}
            />
          </div>
          <Checkbox
            mt="md"
            label="I agree to sell my privacy"
            key={form.key('termsOfService')}
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />

          {/* <Group justify="flex-end" mt="md"> */}
          <Button type="submit">Submit</Button>
          {/* </Group> */}
        </form>
      </div>
    </>
  );
}
