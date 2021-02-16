import { colors, fontSize, swatches } from '@codecademy/gamut-styles';
import { css } from '@emotion/react';
import type { HTMLProps } from 'react';

export type ButtonProps = Omit<
  HTMLProps<HTMLLinkElement> & HTMLProps<HTMLButtonElement>,
  'size'
> & {
  mode?: 'dark' | 'light';
};

export type ButtonSize = 'normal' | 'small' | 'normal-condensed';

export type SizedButtonProps = ButtonProps & {
  size?: ButtonSize;
};

const sizes = {
  'normal-condensed': css`
    font-size: ${fontSize[16]};
    padding: 0.5rem;
    line-height: 1;
  `,
  small: css`
    font-size: ${fontSize[14]};
    padding: 0.5rem;
    line-height: 1;
  `,
  normal: css`
    font-size: ${fontSize[16]};
    padding: 0.75rem 1rem;
    line-height: 1;
  `,
};

export const buttonSizing = (size?: ButtonSize) => {
  return size ? sizes?.[size] : undefined;
};

export const modeColorGroups = {
  dark: {
    background: colors.yellow,
    backgroundDull: colors.yellow[400],
    backgroundEmphasized: swatches.gray[900],
    backgroundMuted: swatches.gray[600],
    foregroundMuted: swatches.gray[200],
    foreground: colors.black,
    shadow: colors.white,
  },
  'dark-alt': {
    background: colors.white,
    backgroundDull: swatches.gray[200],
    backgroundEmphasized: colors.navy,
    backgroundMuted: swatches.gray[600],
    foregroundMuted: swatches.gray[200],
    foreground: colors.navy,
    shadow: colors.white,
  },
  light: {
    background: colors.hyper,
    backgroundDull: swatches.hyper[400],
    backgroundEmphasized: swatches.gray[100],
    backgroundMuted: swatches.gray[200],
    foregroundMuted: swatches.gray[600],
    foreground: colors.white,
    shadow: colors.black,
  },
  'light-alt': {
    background: colors.navy,
    backgroundDull: swatches.gray[600],
    backgroundEmphasized: swatches.gray[100],
    backgroundMuted: swatches.gray[200],
    foregroundMuted: swatches.gray[600],
    foreground: colors.white,
    shadow: colors.navy,
  },
};
