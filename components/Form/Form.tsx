import { useState } from 'react';
import { Switch, Text } from '@mantine/core';
import { LoginForm } from './Login';
import { SignUpForm } from './SignUp';
import styles from './Form.module.css';

export const Form = () => {
  const [loginForm, setLoginForm] = useState<boolean>(true);
  return (
    <div className={styles.formContainer}>
      <div className={styles.switch}>
        <Text>Login</Text>
        <Switch
          color="black"
          checked={loginForm === false}
          onChange={() => setLoginForm((prev: boolean) => !prev)}
        />
        <Text>Sign Up</Text>
      </div>
      {loginForm ? <LoginForm className={styles.form} /> : <SignUpForm className={styles.form} />}
    </div>
  );
};
