import React from 'react';
import { FormContextValues } from 'react-hook-form';

import { Input } from '../../../Form';
import { GridFormTextField } from '../../types';

export type GridFormTextInputProps = {
  className?: string;
  error?: boolean;
  field: Omit<GridFormTextField, 'label'>;
  register: FormContextValues['register'];
  id?: string;
};

export const GridFormTextInput: React.FC<GridFormTextInputProps> = ({
  className,
  error,
  field,
  register,
  id,
}) => {
  return (
    <Input
      className={className}
      error={error}
      htmlFor={field.name}
      onChange={(event) => field.onUpdate?.(event.target.value)}
      placeholder={field.placeholder}
      name={field.name}
      ref={register(field.validation)}
      type={field.type}
      id={id}
    />
  );
};

export default GridFormTextInput;
