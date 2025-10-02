import { ChangeEvent, HTMLAttributes, Ref } from 'react';
import { clsx } from 'clsx';

import './input.css';

interface InputTypes extends HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  name?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  ref?: Ref<HTMLInputElement>;
  errorLabel?: string;
  errors?: string;
  required: boolean;
  autoComplete: string;
}

export const Input = ({
  id,
  className,
  label,
  errors,
  errorLabel,
  onChange,
  ...rest
}: InputTypes) => {
  const handleOnChage = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div className={clsx(className, 'input-container')}>
      <label htmlFor={label}>{label}</label>
      <input
        id={id}
        onChange={(event) => handleOnChage(event)}
        aria-describedby={errorLabel}
        {...rest}
      />
      <span id={errorLabel}>{errors}</span>
    </div>
  );
};
