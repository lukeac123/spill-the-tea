'use client';

import { ChangeEvent, useContext, useState } from 'react';
import { Input } from '@/components';
import { CurrentUser } from '../../app/page';

interface FormErrorsType {
  email?: string;
  password?: string;
}

interface LoginUserType {
  email: string;
  password: string;
}

const validate = (formData) => {
  const errs: FormErrorsType = {};

  if (!formData.password) {
    errs.email = 'Password required';
  }

  if (!formData.email) {
    errs.email = 'Email required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errs.email = 'Enter a valid email address.';
  }

  return errs;
};

export const LoginForm = ({ className }: { className: string }) => {
  const [formData, setFormData] = useState<LoginUserType>({
    email: '',
    password: '',
  });

  const { setUser } = useContext(CurrentUser);

  const [formErrors, setFormErrors] = useState<FormErrorsType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [formComplete, setFormComplete] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { value, id } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const errors = validate(formData);
    setFormErrors(errors);

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);

    if (data.name) {
      setFormComplete(`Welcome Back ${data.name}`);
      setUser(data.email); // This will be set to the database made id
      setLoading(false);
    } else {
      setFormComplete('Error : Email or Password Incorrect');
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className={className}>
        <Input
          id="email"
          name="email"
          label="Email"
          placeholder="johndoe@email.com"
          value={formData.email}
          onChange={(event) => handleChange(event)}
          autoComplete="email"
          required
          aria-required
          errors={formErrors.email}
        />
        <Input
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="******"
          value={formData.password}
          onChange={(event) => handleChange(event)}
          autoComplete="password"
          required
          aria-required
          errors={formErrors.password}
        />
        <button type="submit">Login</button>
      </form>
      {loading && '...loading'}
      {formComplete}
    </div>
  );
};
