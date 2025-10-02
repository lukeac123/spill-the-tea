import { ChangeEvent, HTMLAttributes, Ref } from 'react';
import { clsx } from 'clsx';
import styles from './input.module.css';

interface InputTypes extends HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  name?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  ref?: Ref<HTMLInputElement>;
  errorLabel?: string;
  errors?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  type?: string;
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
    <div className={clsx(className, styles.inputContainer)}>
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
