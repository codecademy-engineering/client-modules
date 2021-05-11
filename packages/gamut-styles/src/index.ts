import '@emotion/react';

import { coreTheme } from './themes';

export * from './GamutProvider';
export * from './ColorMode';
export * from './Background';
export * from './variance';
export * from './cache';
export * from './variables';
export * from './styles';
export * from './globals';
export * from './utilities';
export * from './props';
export * from './themes';

export type ThemeShape = typeof coreTheme;

export const theme = coreTheme;

declare module '@emotion/react' {
  export interface Theme extends ThemeShape {}
}
