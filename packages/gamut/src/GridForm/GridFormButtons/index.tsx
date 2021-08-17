import React, { ComponentProps } from 'react';

import { Box } from '../../Box';
import { CTAButton, FillButton, TextButton } from '../../Button';
import { ButtonProps } from '../../Button/shared';
import { SubmitButton } from '../../Form';
import { Column } from '../../Layout';
import { VisualTheme } from '../../theming/VisualTheme';

export type GridFormButtonsPosition = keyof typeof positions;

export type SubmitButtonType = 'cta' | 'fill';

export type GridFormSubmitProps = {
  contents: React.ReactNode;
  position?: GridFormButtonsPosition;
  size: ComponentProps<typeof Column>['size'];
  disabled?: ButtonProps['disabled'];
  mode?: VisualTheme;
  type?: SubmitButtonType;
};

export type GridFormCancelButtonProps = {
  children: React.ReactNode;
  href?: 'string';
  onClick?: () => void;
};

type CancelButtonProps = {
  cancel?: ButtonProps;
};

const positions = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  stretch: 'stretch',
};

const buttonMap = {
  cta: CTAButton,
  fill: FillButton,
};

export const GridFormButtons: React.FC<
  GridFormSubmitProps & CancelButtonProps
> = ({ type = 'fill', ...props }) => {
  return (
    <Column size={props.size}>
      <Box
        mb={8}
        alignSelf="center"
        justifySelf={positions[props.position || 'left']}
      >
        {props.cancel && (
          <TextButton {...props.cancel} mr={32} data-testid="cancel-button" />
        )}
        <SubmitButton
          as={buttonMap[type]}
          mode={props.mode}
          disabled={props.disabled}
        >
          {props.contents}
        </SubmitButton>
      </Box>
    </Column>
  );
};
