import React from 'react';
import cx from 'classnames';

import { generateClassnames } from '../utils/generateClassnames';
import { ContainerElementProps, ColumnSizes, OffsetColumnSizes } from './types';
import s from './styles/Column.module.scss';
import {
  ResponsiveProperty,
  OptionalResponsiveProperty,
} from '../typings/responsive-properties';

export type ColumnProps = {
  size: ResponsiveProperty<ColumnSizes>;
  offset?: OptionalResponsiveProperty<OffsetColumnSizes>;
} & ContainerElementProps;

export const Column: React.FC<ColumnProps> = ({
  children,
  className,
  size,
  offset,
  testId,
}) => {
  const classNames = cx(
    s.container,
    className,
    generateClassnames({ size, offset }, s)
  );
  return (
    <div className={classNames} data-testid={testId}>
      {children}
    </div>
  );
};

export default Column;
