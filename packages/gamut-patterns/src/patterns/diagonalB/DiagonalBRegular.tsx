import React from 'react';

import { PatternComponent, PatternSvg } from '../../types';

export const DiagonalBRegular: React.FC<PatternComponent> = ({ ...props }) => (
  <PatternSvg width="100%" height="100%" {...props} aria-hidden>
    <pattern
      id="diagonalBRegular"
      x="0"
      y="0"
      width="8"
      height="8"
      patternUnits="userSpaceOnUse"
    >
      <g clipPath="url(#clipDiagonalBRegular)">
        <rect width="8" height="8" fill="white" />
        <rect y="7" width="1" height="1" fill="currentColor" />
        <rect x="1" y="6" width="1" height="1" fill="currentColor" />
        <rect x="2" y="5" width="1" height="1" fill="currentColor" />
        <rect x="3" y="4" width="1" height="1" fill="currentColor" />
        <rect x="4" y="3" width="1" height="1" fill="currentColor" />
        <rect x="5" y="2" width="1" height="1" fill="currentColor" />
        <rect x="6" y="1" width="1" height="1" fill="currentColor" />
        <rect x="7" width="1" height="1" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clipDiagonalBRegular">
          <rect width="8" height="8" fill="white" />
        </clipPath>
      </defs>
    </pattern>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="url(#diagonalBRegular)"
    />
  </PatternSvg>
);
