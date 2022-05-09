import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { useFormState } from '../../..';
import { Input } from '../../../Form';
import { BaseFormInputProps, GridFormTextField } from '../../types';

export interface GridFormTextInputProps extends BaseFormInputProps {
  field: Omit<GridFormTextField, 'label'>;
  register: UseFormReturn['register'];
}

export const GridFormTextInput: React.FC<GridFormTextInputProps> = ({
  className,
  error,
  field,
  register,
  required,
  disabled,
}) => {
  const { onChange, ...rest } = {
    ...register(field.name, {
      ...field.validation,
    }),
  };

  const { clearErrors } = useFormState();

  return (
    <Input
      {...rest}
      aria-invalid={error}
      aria-required={required}
      className={className}
      disabled={disabled}
      error={error}
      htmlFor={field.name}
      id={field.id}
      name={field.name}
      onChange={async (event) => {
        await onChange(event);
        field?.onUpdate?.(event.target.value);
      }}
      onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length <= 1) clearErrors(field.name);
      }}
      placeholder={field.placeholder}
      type={field.type}
    />
  );
};
