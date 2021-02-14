export type AbstractProps = Record<string, unknown>;

export interface BaseTheme {
  [key: string]: unknown;
}

export interface AbstractTheme extends BaseTheme {
  breakpoints?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface ThemeProps<T extends AbstractTheme> {
  theme?: T;
}

export interface CSSObject {
  [key: string]: string | number | CSSObject | undefined;
}

export interface MediaQueryArray<T> {
  0?: T;
  1?: T;
  2?: T;
  3?: T;
  4?: T;
  5?: T;
}
export interface MediaQueryMap<T> {
  base?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

export type ResponsiveProp<T> = T | MediaQueryMap<T> | MediaQueryArray<T>;

export type BreakpointCache<T extends AbstractTheme> = {
  map: T['breakpoints'];
  array: string[];
} | null;

export type Chained = `&` | `>` | '~' | '+';

export type SelectorLiterals =
  | `[${string}]`
  | `&:${string}`
  | `${Chained} ${string}`
  | `${string} ${Chained} ${string}`;

export type Selectors<T> = T extends SelectorLiterals ? T : never;

export type SelectorMap<
  Config extends AbstractProps,
  SelectorKeys extends Selectors<keyof Config>,
  Props extends AbstractProps
> = {
  [K in keyof Config]: K extends SelectorKeys
    ? Props
    : K extends keyof Props
    ? Props[K]
    : never;
};
