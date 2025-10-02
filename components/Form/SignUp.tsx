'use client';

import { ChangeEvent, useState } from 'react';
import { Input } from '@/components';

interface FormErrorsType {
  name?: string;
  email?: string;
  gender?: string;
  location?: string;
  password?: string;
}

interface UserType {
  name: string;
  email: string;
  gender: string;
  location: string;
  password: string;
}

export const SignUpForm = ({ className }: { className: string }) => {
  const [formData, setFormData] = useState<UserType>({
    name: '',
    email: '',
    gender: '',
    location: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrorsType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [formComplete, setFormComplete] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const validate = () => {
    const errs: FormErrorsType = {};

    if (!formData.name) {
      errs.name = 'Name is required';
    }

    if (!formData.email) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address.';
    }

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const errors = validate();
    setFormErrors(errors);

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.userExists) {
      setFormComplete('Error : User Already Exists');
      setLoading(false);
    } else {
      setLoading(false);
      setFormComplete('Thankyou for signing up, confirmation will be with you shortly');
    }
  };

  return (
    <>
      <form className={className} onSubmit={(e) => handleSubmit(e)}>
        <Input
          id="name"
          name="name"
          placeholder="John"
          label="Name"
          value={formData.name}
          onChange={(event) => handleChange(event)}
          autoComplete="given-name"
          required
          aria-required
          errors={formErrors.name}
        />

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

        <fieldset className="gender">
          <legend>Select your gender</legend>
          <label htmlFor="male">Male</label>
          <input
            id="male"
            type="radio"
            value="male"
            name="gender"
            checked={formData.gender === 'male'}
            onChange={handleChange}
            required
          />
          <label htmlFor="female">Female</label>
          <input
            id="female"
            type="radio"
            value="female"
            name="gender"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />

          <label htmlFor="other">Prefer Not to Say</label>
          <input
            id="other"
            type="radio"
            value="other"
            name="gender"
            checked={formData.gender === 'other'}
            onChange={handleChange}
          />
        </fieldset>

        <>
          <label htmlFor="location">Location</label>
          <select
            name="location"
            id="location"
            required
            aria-required
            onChange={(event) => handleChange(event)}
          >
            <option>London</option>
            <option>Paris</option>
            <option>Tokyo</option>
            <option>Rome</option>
            <option>Madrid</option>
          </select>
        </>

        <button type="submit">Submit</button>
      </form>
      {loading && '...loading'}
      {formComplete}
    </>
  );
};
