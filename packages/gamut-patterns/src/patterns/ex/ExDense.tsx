import { styledConfig, system } from '@codecademy/gamut-styles';
import { variance } from '@codecademy/variance';
import styled from '@emotion/styled';
import React from 'react';

import { PatternProps } from '../../types';

const logoStyles = variance.compose(
  system.layout,
  system.positioning,
  system.space
);

const Svg = styled('svg', styledConfig)<PatternProps>(logoStyles);

export const ExDense: React.FC<PatternProps> = ({ ...props }) => (
  <Svg width="100%" height="100%" {...props} aria-hidden>
    <pattern
      id="exDense"
      x="0"
      y="0"
      width="4"
      height="4"
      patternUnits="userSpaceOnUse"
    >
      <rect x="1" width="1" height="1" fill="currentColor" />
      <rect y="1" width="1" height="1" fill="currentColor" />
      <rect x="1" y="2" width="1" height="1" fill="currentColor" />
      <rect x="3" width="1" height="1" fill="currentColor" />
      <rect x="3" y="2" width="1" height="1" fill="currentColor" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#exDense)" />
  </Svg>
);
