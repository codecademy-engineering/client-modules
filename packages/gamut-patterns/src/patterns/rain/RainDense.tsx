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

export const RainDense: React.FC<PatternProps> = ({ ...props }) => (
  <Svg width="100%" height="100%" {...props} aria-hidden>
    <pattern
      id="rainDense"
      x="0"
      y="0"
      width="4"
      height="4"
      patternUnits="userSpaceOnUse"
    >
      <rect width="1" height="1" fill="currentColor" />
      <rect x="1" y="1" width="1" height="1" fill="currentColor" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#rainDense)" />
  </Svg>
);
