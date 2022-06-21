import React, { useLayoutEffect, useRef, useState } from 'react';

import { Box, FlexBox } from '../Box';
import { Popover } from '../Popover';
import { ToolTipProps } from '.';
import { getContainerWidths } from './elements';

export const PopoverToolTip: React.FC<ToolTipProps> = ({
  alignment = 'top-left',
  children,
  focusable,
  id,
  widthMode,
  target,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    if (ref?.current) {
      setOffset(-ref.current.clientWidth / 2 + 32);
    }
  }, []);

  const widthContraints = getContainerWidths({ alignment, widthMode });

  return (
    <Box
      position="relative"
      display="inline-flex"
      onMouseLeave={() => setIsOpen(false)}
    >
      <Box
        aria-labelledby={id}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            (event.target as HTMLElement).blur();
          }
        }}
        // ToolTips sometimes contain actual <button>s, which cannot be a child of a button.
        // This element still needs tab focus so we must use the `tabIndex=0` hack.
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={focusable ? 0 : undefined}
        ref={ref}
        onMouseEnter={() => setIsOpen(true)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        width="min-content"
        height="min-content"
      >
        {target}
      </Box>
      <Popover
        align="left"
        position="above"
        aria-live="polite"
        beak="left"
        horizontalOffset={offset}
        isOpen
        onRequestClose={() => setIsOpen(false)}
        outline
        role="tooltip"
        size="sml"
        targetRef={ref}
      >
        <FlexBox
          {...widthContraints}
          flexDirection="column"
          alignItems="flex-start"
        >
          {children}
        </FlexBox>
      </Popover>
    </Box>
  );
};
