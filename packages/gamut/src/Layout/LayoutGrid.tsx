import { pxRem, styledConfig, system, theme } from '@codecademy/gamut-styles';
import { StyleProps, variance } from '@codecademy/variance';
import styled from '@emotion/styled';
import { pick } from 'lodash';

const gutters = pick(theme.spacing, [8, 16, 24, 32]);

const grid = variance.create({
  gap: {
    property: 'gap',
    properties: ['rowGap', 'columnGap'],
    scale: gutters,
  },
  rowGap: { property: 'rowGap', scale: gutters },
  columnGap: { property: 'columnGap', scale: gutters },
  rowHeight: {
    property: 'gridAutoRows',
    transform: (height: string) => `minmax(${pxRem(height)}, 1fr)`,
  },
});

const gridProps = variance.compose(system.space, grid);

interface GridProps extends StyleProps<typeof gridProps> {}

export const LayoutGrid = styled(
  'div',
  styledConfig(grid.propNames)
)<GridProps>(
  system.css({
    display: 'grid',
    width: '100%',
    gridTemplateColumns: `repeat(12, minmax(0, 1fr))`,
  }),
  gridProps
);
