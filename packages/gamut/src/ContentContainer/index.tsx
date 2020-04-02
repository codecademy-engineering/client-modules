import cx from 'classnames';
import React, { HTMLAttributes, ReactHTML } from 'react';

import s from './styles.module.scss';

export type ContentContainerProps = {
  className?: string;
  el?: keyof ReactHTML;
  /** Toggle a containerWide className to be applied with no max-width and smaller padding */
  wide?: boolean;
};

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  className,
  el,
  wide = false,
  ...rest
}) => {
  const Element = el || 'div';
  const classes = cx(
    {
      [s.contentContainerWide]: wide,
    },
    s.contentContainer,
    className
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

export default ContentContainer;
