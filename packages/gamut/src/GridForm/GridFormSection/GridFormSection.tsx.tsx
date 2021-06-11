import React from 'react';

import { GridFormField } from '../types';
import { GridFormQuestion } from './GridFormQuestion';

export type GridFormSectionProps = {
  fields: GridFormField[];
  showRequired: boolean;
};

export const GridFormSection: React.FC<GridFormSectionProps> = ({
  fields,
  showRequired,
}) => {
  return (
    <>
      {fields.map((field) => {
        return <GridFormQuestion field={field} showRequired={showRequired} />;
      })}
    </>
  );
};
