import cx from 'classnames';
import React from 'react';

import { GenericMarkdownProps } from '../types';
// eslint-disable-next-line gamut/no-css-standalone
import styles from './styles.module.scss';

export const ErrorBlock: React.FC<GenericMarkdownProps> = ({
  children,
  className,
}) => {
  return <code className={cx(styles.errorBlock, className)}>{children}</code>;
};
