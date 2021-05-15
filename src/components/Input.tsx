import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from '../styles/components/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  description?: string;
}

const Input: React.FC<InputProps> = ({ label, description, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>();
  const { fieldName, defaultValue, registerField, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container error={error !== undefined}>
      {label && <strong>{label}</strong>}
      <input
        name={name}
        type={rest.type ? rest.type : 'text'}
        ref={inputRef}
        onFocus={clearError}
        defaultValue={defaultValue}
        {...rest}
      />
      {(description || error) && <span>{error || description}</span>}
    </Container>
  );
};

export default Input;
