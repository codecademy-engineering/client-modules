import { theme, variant } from '@codecademy/gamut-styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const contentContainerVariants = variant({
  prop: 'size',
  default: 'medium',
  variants: {
    medium: {
      paddingX: [16, 32, 64, , 96],
      maxWidth: theme.content.md,
    },
    wide: {
      paddingX: [, , 24, 32],
    },
  },
});

export const ContentContainer = styled.div(
  contentContainerVariants,
  () => css`
    height: 100%;
    width: 100%;
    margin: 0 auto;
  `
);
