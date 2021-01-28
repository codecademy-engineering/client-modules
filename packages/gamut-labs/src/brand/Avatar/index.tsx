import { VisualTheme } from '@codecademy/gamut';
import cx from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

type AvatarImageProps =
  | {
      alt: string;
      'aria-labelledby'?: never;
    }
  | { alt?: never; 'aria-labelledby': string };

type AvatarBaseProps = {
  /**
   * path to image asset
   */
  src: string;
  /**chooses color of drop shadow
   */
  theme?: VisualTheme;
  className?: string; // useful if avatar size needs to be overridden
};

type AvatarProps = AvatarBaseProps & AvatarImageProps;

export const Avatar: React.FC<AvatarProps> = ({
  theme = 'light',
  className,
  ...avatarImageProps
}) => {
  return (
    <div
      className={cx(
        styles.container,
        className,
        theme === 'dark' ? styles.darkContainer : styles.lightContainer
      )}
    >
      {/*  The current rules for alt-text don't allow images with aria-labelledby to have no alt. So, we need to disable the rule for that line. https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/411#issue-306995775 */}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...avatarImageProps} />
    </div>
  );
};
