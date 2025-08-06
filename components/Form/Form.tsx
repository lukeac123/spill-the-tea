'use client';

import './Form.css';

import { ChangeEvent, useState } from 'react';

export const Form = () => {
  //Change this to an object of Objects so it can be mapped over

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    number: '',
    email: '',
    gender: '',
    genderOther: '',
    location: '',
    availability: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const fieldName = event.target.name;
    setFormState((prev) => {
      return {
        ...prev,
        [fieldName]: value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // const response = await fetch('../api/submit', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formState),
    // });

    // const result = await response.json();
    // alert(result.message);
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        value={formState.firstName}
        onChange={handleChange}
        autoComplete="given-name"
        required
        aria-required
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        id="lastName"
        value={formState.lastName}
        onChange={handleChange}
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
            checked={formState.gender === 'male'}
            onChange={handleChange}
            required
          />
          <label htmlFor="female">Female</label>
          <input
            id="female"
            type="radio"
            value="female"
            name="gender"
            checked={formState.gender === 'female'}
            onChange={handleChange}
          />

          <label htmlFor="other">Other</label>
          <input
            id="other"
            type="radio"
            value="other"
            name="gender"
            checked={formState.gender === 'other'}
            onChange={handleChange}
          />
        </>
        {formState.gender === 'other' && (
          <>
            <label>Please Specify</label>
            <input name={'genderOther'} value={formState.genderOther} onChange={handleChange} />
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
