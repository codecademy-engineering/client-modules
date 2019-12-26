import React from 'react';
import cx from 'classnames';

import { ContainerElementProps } from './types';
import s from './styles/Column.scss';

type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColumnProps = {
  sm: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  fill?: boolean;
};

/**
 * This is a temporary component that is intended to be moved to Gamut Shortly
 */
const Column: React.FC<ColumnProps & ContainerElementProps> = ({
  children,
  md,
  sm,
  lg,
  testId,
  fill = true,
}) => {
  const classNames = cx({
    [s.container]: fill,
    [s[`column_lgScreen__${lg}`]]: lg,
    [s[`column_mdScreen__${md}`]]: md,
    [s[`column_smScreen__${sm}`]]: sm,
  });
  return (
    <div className={classNames} data-testid={testId}>
      {children}
    </div>
  );
};

export default Column;
