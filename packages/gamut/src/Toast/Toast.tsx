import { MiniDeleteIcon } from '@codecademy/gamut-icons';
import { system } from '@codecademy/gamut-styles';
import { StyleProps } from '@codecademy/variance';
import styled from '@emotion/styled';
import React, { useMemo } from 'react';

import { Box } from '../Box';
import { IconButton } from '../Button/IconButton';
import { FloatingCard } from '../Card';
import { Text } from '../Typography';

const layoutVariants = system.variant({
  prop: 'layout',
  defaultVariant: 'message',
  variants: {
    message: {
      minHeight: '80px',
      gridTemplateAreas: `'message message close'`,
    },
    'icon-message': {
      gridTemplateAreas: `'icon message close'`,
      minHeight: '104px',
    },
    'title-message': {
      minHeight: '104px',
      gridTemplateAreas: `'message message close'`,
    },
  },
});

const ToastContainer = styled(FloatingCard)<StyleProps<typeof layoutVariants>>(
  system.css({
    display: 'grid',
    width: 360,
    py: 12,
    px: 16,
    pr: 12,
    columnGap: 12,
    gridTemplateColumns: '4rem 1fr 2rem',
  }),
  layoutVariants
);

const IconContainer = styled(Box)(
  system.css({
    bg: 'text',
    width: 64,
    height: 64,
    border: 1,
    gridArea: 'icon',
    borderRadius: '50%',
    backgroundSize: 'contain',
  })
);

export const Toast: React.FC<{
  title?: string;
  message: string;
  icon?: string;
  onClose: () => void;
}> = ({ title, message, icon, onClose }) => {
  const layoutType = useMemo(() => {
    if (icon) return 'icon-message';
    if (title) return 'title-message';
    return 'message';
  }, [title, icon]);

  return (
    <ToastContainer layout={layoutType} pattern="checkerDense">
      {icon && (
        <IconContainer alignSelf="center" backgroundImage={`url(${icon})`} />
      )}
      <Text gridArea="message" py={4}>
        {title && (
          <Text variant="p-base" fontWeight="title" mb={4}>
            {title}
          </Text>
        )}
        <Text as="p" variant="p-small">
          {message}
        </Text>
      </Text>
      <IconButton
        onClick={onClose}
        size="small"
        variant="secondary"
        icon={MiniDeleteIcon}
        alignSelf="start"
      />
    </ToastContainer>
  );
};
