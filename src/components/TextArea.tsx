import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from '../styles/components/TextArea';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  description?: string;
}

const TextArea: React.FC<InputProps> = ({ label, description, name, ...rest }) => {
  const inputRef = useRef<HTMLTextAreaElement>();
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
      <textarea
        name={name}
        ref={inputRef}
        onFocus={clearError}
        defaultValue={defaultValue}
        {...rest}
      />
      {(description || error) && <span>{error || description}</span>}
    </Container>
  );
};

export default TextArea;
