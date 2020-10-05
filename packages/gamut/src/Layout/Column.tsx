import React from 'react';
import cx from 'classnames';

import { generateResponsiveClassnames } from '../utils/generateResponsiveClassnames';
import { ContainerElementProps, ColumnSizes, OffsetColumnSizes } from './types';
import s from './styles/Column.module.scss';
import {
  ResponsiveProperty,
  OptionalResponsiveProperty,
} from '../typings/responsive-properties';

export type ColumnProps = {
  /** The number of columns this element should span out of 12 */
  size: ResponsiveProperty<ColumnSizes>;
  /** The column that this element should start at */
  offset?: OptionalResponsiveProperty<OffsetColumnSizes>;
  /** The number of rows this element should span */
  rowspan?: number;
} & ContainerElementProps;

export const Column: React.FC<ColumnProps> = ({
  children,
  className,
  size,
  offset,
  rowspan = 1,
  testId,
}) => {
  const classNames = cx(
    s.container,
    className,
    generateResponsiveClassnames({ size, offset }, s)
  );
  return (
    <div
      className={classNames}
      data-testid={testId}
      style={{
        gridRow: `span ${rowspan}`,
      }}
    >
      {children}
    </div>
  );
};
