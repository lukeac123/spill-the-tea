'use client';

import './Form.css';

import { ChangeEvent, useState } from 'react';

interface FormErrorsType {
  firstName?: string;
  lastName?: string;
  email?: string;
  gender?: string;
  genderOther?: string;
  location?: string;
  availability?: string;
}

interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  location: string;
}

export const Form = () => {
  const [formData, setFormData] = useState<UserType>({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    location: '',
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

    if (!formData.firstName) {
      errs.firstName = 'Name is required';
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

    const response = await fetch('/api', {
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
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={(event) => handleChange(event)}
            autoComplete="given-name"
            required
            aria-required
          />
          {formErrors.firstName}
        </>
        <>
          <label htmlFor="lastName">First Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={(event) => handleChange(event)}
            autoComplete="family-name"
            required
            aria-required
          />
          {formErrors.firstName}
        </>
        <>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="johndoe@email.com"
            value={formData.email}
            onChange={(event) => handleChange(event)}
            autoComplete="email"
            required
            aria-required
          />
          {formErrors.firstName}
        </>
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

        <button type="submit">Submit</button>
      </form>
      {loading && '...loading'}
      {formComplete}
    </>
  );
};
