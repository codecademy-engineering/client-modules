import React from 'react';

import { PatternProps } from '../../types';

export const GridDense: React.FC<PatternProps> = ({ ...props }) => (
  <svg width="100%" height="100%" {...props} aria-hidden>
    <pattern
      id="gridDense"
      x="0"
      y="0"
      width="4"
      height="4"
      patternUnits="userSpaceOnUse"
    >
      <rect width="1" height="1" fill="currentColor" />
      <rect y="2" width="1" height="1" fill="currentColor" />
      <rect x="2" width="1" height="1" fill="currentColor" />
      <rect x="2" y="2" width="1" height="1" fill="currentColor" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#gridDense)" />
  </svg>
);
