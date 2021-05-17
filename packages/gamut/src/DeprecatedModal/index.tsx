import { CloseIcon } from '@codecademy/gamut-icons';
import cx from 'classnames';
import React from 'react';

import { ButtonDeprecated } from '../ButtonDeprecated';
import { CardShell } from '../DeprecatedCard';
import { Overlay, OverlayProps } from '../Overlay';
import styles from './styles.module.scss';

export type DeprecatedModalOverlayProps = Partial<
  Pick<OverlayProps, 'clickOutsideCloses' | 'escapeCloses' | 'className'>
>;

export type DeprecatedModalProps = {
  children?: React.ReactNode;
  className?: string;
  /**
   * Whether the DeprecatedModal is open or closed
   */
  isOpen: boolean;

  /**
   * A function that is called when the DeprecatedModal expects to be closed
   * Triggered automatically by the Overlay component in certain situations
   */
  onRequestClose: () => void;

  /**
   * See Overlay component for prop definitions
   * @description DeprecatedModalOverlayProps
   */
  overlayProps?: DeprecatedModalOverlayProps;

  /**
   * Whether to hide the default close button and pass your own through children
   */
  hideDefaultCloseButton?: boolean;

  ariaLabel?: string;
};

/**
 * @deprecated  This component is deprecated and will be updated soon.
 *
 * Please check the gamut board for updates on the new version of DeprecatedModal
 */

export const DeprecatedModal: React.FC<DeprecatedModalProps> = ({
  children,
  className,
  onRequestClose,
  overlayProps,
  isOpen,
  hideDefaultCloseButton,
  ariaLabel,
}) => {
  return (
    <Overlay
      isOpen={isOpen}
      {...overlayProps}
      className={cx(styles.modal, overlayProps?.className)}
      onRequestClose={onRequestClose}
      data-testid="modal"
    >
      <CardShell
        className={cx(styles.modalBody, className)}
        aria-hidden="false"
        aria-modal="true"
        role="dialog"
        aria-label={ariaLabel}
      >
        {!hideDefaultCloseButton && (
          <div
            className={styles.closeButtonContainer}
            data-testid="modal-default-close-button"
          >
            <ButtonDeprecated
              flat
              theme="brand-dark-blue"
              fitText
              onClick={onRequestClose}
              className={styles.closeButton}
            >
              <CloseIcon width={22} height={22} className={styles.closeIcon} />
            </ButtonDeprecated>
          </div>
        )}
        {children}
      </CardShell>
    </Overlay>
  );
};
