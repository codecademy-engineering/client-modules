import React from 'react';
import { useFormContext, UseFormReturn } from 'react-hook-form';

import { TextArea } from '../../../Form';
import { BaseFormInputProps, GridFormTextAreaField } from '../../types';

export interface GridFormTextAreaProps extends BaseFormInputProps {
  field: Omit<GridFormTextAreaField, 'label'>;
  register: UseFormReturn['register'];
}

export const GridFormTextArea: React.FC<GridFormTextAreaProps> = ({
  className,
  disabled,
  error,
  field,
  register,
  required,
}) => {
  const { onChange, ...rest } = {
    ...register(field.name, {
      ...field.validation,
    }),
  };

  const { clearErrors } = useFormContext();

  return (
    <TextArea
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
        field?.onUpdate?.(event.target.value);
        await onChange(event);
      }}
      onFocus={() => {
        if (error) {
          clearErrors(field.name);
        }
      }}
      placeholder={field.placeholder}
    />
  );
};
