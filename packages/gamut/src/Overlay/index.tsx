import cx from 'classnames';
import FocusTrap from 'focus-trap-react';
import { uniqueId } from 'lodash';
import React, { useMemo } from 'react';

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
  onRequestClose: () => void;
  isOpen?: boolean;
};

export const Overlay: React.FC<OverlayProps> = ({
  className,
  children,
  clickOutsideCloses = true,
  escapeCloses = true,
  onRequestClose,
  isOpen,
}) => {
  /**
   * focus-trap doesn't ensure fallback focus selector
   * is a child of the focus container, so we need a unique selector for each modal
   */
  const modalId = useMemo(() => uniqueId('gamut-overlay-'), []);

  if (!isOpen) return null;

  return (
    <BodyPortal>
      <FocusTrap
        focusTrapOptions={{
          clickOutsideDeactivates: clickOutsideCloses,
          escapeDeactivates: escapeCloses,
          onDeactivate: onRequestClose,
          fallbackFocus: `[data-gamut-overlay=${modalId}]`,
        }}
      >
        <div
          className={cx(styles.container, className)}
          data-gamut-overlay={modalId}
          tabIndex={-1}
        >
          {children}
        </div>
      </FocusTrap>
    </BodyPortal>
  );
};

export default Overlay;
