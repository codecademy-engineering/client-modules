import { system } from '@codecademy/gamut-styles';
import { variance } from '@codecademy/variance';
import styled from '@emotion/styled';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useWindowScroll, useWindowSize } from 'react-use';

import { BodyPortal } from '../BodyPortal';
import { FocusTrap } from '../FocusTrap';
import { ContainerState, PopoverContainerProps } from './types';
import { getContainers, getPosition, isInView } from './utils';

const PopoverContent = styled.div(
  variance.compose(
    system.positioning,
    variance.create({
      transform: {
        property: 'transform',
      },
    })
  )
);

export const PopoverContainer: React.FC<PopoverContainerProps> = ({
  alignment = 'bottom-left',
  offset = 20,
  y = 0,
  x = 0,
  insideAxis,
  inline = false,
  isOpen,
  onRequestClose,
  targetRef,
  ...rest
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const { width: winW, height: winH } = useWindowSize();
  const { x: winX, y: winY } = useWindowScroll();
  const [containers, setContainers] = useState<ContainerState>();
  const parent = containers?.parent;

  const popoverPosition = useMemo(() => {
    if (parent !== undefined) {
      return getPosition({
        alignment,
        container: parent,
        insideAxis,
        offset,
        x,
        y,
      });
    }
    return {};
  }, [parent, x, y, offset, alignment, insideAxis]);

  useEffect(() => {
    const target = targetRef?.current;
    if (!target) return;
    setContainers(getContainers(target, inline, { x: winX, y: winY }));
  }, [targetRef, inline, winW, winH, winX, winY]);

  useLayoutEffect(() => {
    containers?.viewport &&
      !isInView(containers?.viewport) &&
      onRequestClose?.();
  }, [containers?.viewport, onRequestClose]);

  /**
   * Allows targetRef to be or contain a button that toggles the popover open and closed.
   * Without this check it would toggle closed then back open immediately.
   */
  const handleClickOutside = useCallback(
    (e) => !targetRef.current?.contains(e.target as Node) && onRequestClose?.(),
    [onRequestClose, targetRef]
  );

  if (!isOpen || !targetRef) return null;

  const content = (
    <FocusTrap
      allowPageInteraction
      onClickOutside={handleClickOutside}
      onEscapeKey={onRequestClose}
    >
      <PopoverContent
        ref={popoverRef}
        tabIndex={-1}
        position="absolute"
        data-testid="popover-content-container"
        {...popoverPosition}
        {...rest}
      />
    </FocusTrap>
  );

  if (inline) return content;

  return <BodyPortal>{content}</BodyPortal>;
};
