'use client';

import { Input } from '../Input';

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

interface FormType {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  genderOther: string;
  location: string;
  availability: string;
}

export const Form = () => {
  //Change this to an object of Objects so it can be mapped over

  const [formData, setFormData] = useState<FormType>({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    genderOther: '',
    location: '',
    availability: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrorsType>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
    const errors = validate();
    setFormErrors(errors);

    const response = await fetch('/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <Input
        id="firstName"
        name="firstName"
        value={formData.firstName}
        label="First Name"
        onChange={(event) => handleChange(event)}
        autoComplete="given-name"
        required
        aria-required
        errors={formErrors.firstName}
      />
      <Input
        id="lastName"
        name="lastName"
        label="Last Name"
        value={formData.lastName}
        onChange={(event) => handleChange(event)}
        autoComplete="family-name"
        required
        aria-required
      />
      <fieldset className="gender">
        <legend>Select your gender</legend>
        <>
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

          <label htmlFor="other">Other</label>
          <input
            id="other"
            type="radio"
            value="other"
            name="gender"
            checked={formData.gender === 'other'}
            onChange={handleChange}
          />
        </>
        {formData.gender === 'other' && (
          <>
            <label>Please Specify</label>
            <input name={'genderOther'} value={formData.genderOther} onChange={handleChange} />
          </>
        )}
      </fieldset>

      <label htmlFor="location">Location</label>
      <select name="location" id="location" required aria-required>
        <option>London</option>
        <option>Paris</option>
        <option>Tokyo</option>
        <option>Rome</option>
        <option>Madrid</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};
