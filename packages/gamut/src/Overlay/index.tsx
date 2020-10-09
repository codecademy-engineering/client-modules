import cx from 'classnames';
import FocusTrap from 'focus-trap-react';
import { useLockBodyScroll } from 'react-use';
import React from 'react';

import { BodyPortal } from '../BodyPortal';
import styles from './styles.module.scss';

export type OverlayProps = {
  children: React.ReactElement<any>;
  className?: string;

  /**
   * Whether clicking on the screen outside of the container should close the Overlay
   */
  clickOutsideCloses?: boolean;
  /**
   * Whether clicking the escape key should close the Overlay
   */
  escapeCloses?: boolean;
  /**
   * Called when the Overlay requests to be closed,
   * this could be due to clicking outside of the overlay, or by clicking the escape key
   */
  onRequestClose?: () => void;
  /**
   * Whether the overlay is rendered
   */
  isOpen?: boolean;
  /**
   * Whether to use fixed positioning on the overlay. Defaults to true.
   * @default true
   */
  fixedPositioning?: boolean;
  /**
   * Whether the focus will return to the element that had focus before activation. If false, it will *not* return.
   * @default true
   */
  returnFocusOnDeactivates?: boolean;
  /**
   * Whether to lock scroll when overlay is opened.
   * @default true
   */
  lockScroll?: boolean;
};

export const Overlay: React.FC<OverlayProps> = ({
  className,
  children,
  clickOutsideCloses = true,
  escapeCloses = true,
  fixedPositioning = true,
  returnFocusOnDeactivates = true,
  onRequestClose,
  isOpen,
  lockScroll = true,
}) => {
  useLockBodyScroll(isOpen && lockScroll);

  if (!isOpen) return null;

  return (
    <BodyPortal>
      <div
        className={cx(
          fixedPositioning && styles.fixedPositioning,
          styles.container,
          className
        )}
      >
        <FocusTrap
          focusTrapOptions={{
            clickOutsideDeactivates: clickOutsideCloses,
            escapeDeactivates: escapeCloses,
            onDeactivate: onRequestClose,
            returnFocusOnDeactivate: returnFocusOnDeactivates,
          }}
        >
          {children}
        </FocusTrap>
      </div>
    </BodyPortal>
  );
};
