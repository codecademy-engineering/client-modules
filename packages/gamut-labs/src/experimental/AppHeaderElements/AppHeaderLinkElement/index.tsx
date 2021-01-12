import { colors } from '@codecademy/gamut-styles';
import styled from '@emotion/styled';
import React from 'react';

import { AppHeaderLink } from '../../AppHeader/types';

type AppHeaderLinkButtonProps = {
  verticalPadding?: number;
  horizontalPadding?: number;
};

export const AppHeaderLinkButton = styled.a<AppHeaderLinkButtonProps>`
  font-weight: normal;
  min-width: 0;
  /* margin: 0 0.5rem; */

  padding-top: ${({ verticalPadding }) => verticalPadding || 1};
  padding-bottom: ${({ verticalPadding }) => verticalPadding || 1};
  padding-left: ${({ horizontalPadding }) => horizontalPadding || 0};
  padding-right: ${({ horizontalPadding }) => horizontalPadding || 0};

  text-align: left;
  display: block;
  color: ${colors.navy};
  border: 1px solid transparent;
  line-height: 1.5;
  white-space: nowrap;

  &:hover {
    color: ${colors.hyper};
    text-decoration: none;
  }
`;

export type AppHeaderLinkElementProps = AppHeaderLinkButtonProps & {
  className?: string;
  item: AppHeaderLink;
  onClick: (event: React.MouseEvent, trackingTarget: string) => void;
};

export const AppHeaderLinkElement: React.FC<AppHeaderLinkElementProps> = ({
  item,
  onClick,
  ...props
}) => {
  return (
    <AppHeaderLinkButton
      data-testid={item.dataTestId}
      onClick={(event: React.MouseEvent) => onClick(event, item.trackingTarget)}
      href={item.href}
      {...props}
    >
      {item.text}
    </AppHeaderLinkButton>
  );
};
