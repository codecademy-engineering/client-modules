import React, { ComponentProps } from 'react';

import { Box } from '../../Box';
import { CTAButton, FillButton, TextButton } from '../../Button';
import {
  ButtonDeprecated,
  ButtonDeprecatedProps,
} from '../../ButtonDeprecated';
import { Column } from '../../Layout';
import { VisualTheme } from '../../theming/VisualTheme';

export type GridFormSubmitPosition = keyof typeof positions;

export type ButtonType = 'cta' | 'fill';
export type ButtonDeprecatedType = 'business';

type GridFormBase = {
  contents: React.ReactNode;
  position?: GridFormSubmitPosition;
  size: ComponentProps<typeof Column>['size'];
  disabled?: ButtonDeprecatedProps['disabled'];
  mode?: VisualTheme;
};

type GridFormButtonSubmitPropsDeprecated = GridFormBase & {
  type?: ButtonDeprecatedType;
  theme?: ButtonDeprecatedProps['theme'];
  outline?: ButtonDeprecatedProps['outline'];
};

type GridFormSubmitPropsStandard = GridFormBase & {
  type?: ButtonType;
};

export type CancelButtonProps = {
  cancel?: { children: React.ReactNode; onClick: () => void };
};

export type GridFormSubmitProps =
  | GridFormButtonSubmitPropsDeprecated
  | GridFormSubmitPropsStandard;

const positions = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  stretch: 'stretch',
};

export const GridFormSubmit: React.FC<
  GridFormSubmitProps & CancelButtonProps
> = (props) => {
  const getButton = () => {
    switch (props.type) {
      case 'cta':
        return (
          <CTAButton type="submit" mode={props.mode} disabled={props.disabled}>
            {props.contents}
          </CTAButton>
        );
      case 'business':
        /**
         * There are current designs that currently rely on the deprecated button.
         * Primarily business components such as /WorkerSupportApplication/index.tsx,
         * /PlanInvitationBulkForm/PlanInvitationBulkForm.tsx and /PlanInvitationForm/PlanInvitationForm.tsx
         * currently using brand-blue variant of the deprecated button. With the later two also using the also
         * using the outline button. Once work is finished for the colorMode changes for buttons the deprecated button
         * can be removed.
         */
        return (
          <ButtonDeprecated
            disabled={props.disabled}
            outline={props.outline}
            theme={props.theme}
            type="submit"
          >
            {props.contents}
          </ButtonDeprecated>
        );
      default:
        return (
          <FillButton type="submit" mode={props.mode} disabled={props.disabled}>
            {props.contents}
          </FillButton>
        );
    }
  };

  return (
    <Column size={props.size}>
      <Box
        mb={8}
        alignSelf="center"
        justifySelf={positions[props.position || 'left']}
      >
        {props.cancel && <TextButton {...props.cancel} mr={32} />}
        {getButton()}
      </Box>
    </Column>
  );
};
