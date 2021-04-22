import { pxRem, styledConfig, system, theme } from '@codecademy/gamut-styles';
import { StyleProps, variance } from '@codecademy/variance';
import styled from '@emotion/styled';
import { pick } from 'lodash';

const columns = 12;

const gutters = pick(theme.spacing, [8, 16, 24, 32, 48]);

const gutterGuard = (gap: string, property: string) => {
  if (property === 'columnGap') {
    return `min(calc(100% / ${columns - 1}), ${gap})`;
  }
  return gap;
};

const grid = variance.create({
  gap: {
    property: 'gap',
    properties: ['rowGap', 'columnGap'],
    scale: gutters,
    transform: gutterGuard,
  },
  rowGap: { property: 'rowGap', scale: gutters },
  columnGap: {
    property: 'columnGap',
    scale: gutters,
    transform: gutterGuard,
  },
  rowHeight: {
    property: 'gridAutoRows',
    transform: (height: string) => `minmax(${pxRem(height)}, 1fr)`,
  },
});

const gridProps = variance.compose(system.space, grid);

export interface LayoutGridProps extends StyleProps<typeof gridProps> {}

export const LayoutGrid = styled(
  'div',
  styledConfig(grid.propNames)
)<LayoutGridProps>(
  system.css({
    display: 'grid',
    width: '100%',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
  }),
  gridProps
);
