import LinkTo from '@storybook/addon-links/react';
import { shouldForwardProp, themed } from '@codecademy/gamut-styles/src';
import { badgeVariants } from './Badge';
import { Anchor } from '@codecademy/gamut/src';
import styled from '@emotion/styled';
import React from 'react';

export const Reset = styled.div`
  *:first-of-type {
    margin-top: 0;
  }
`;

export const SectionStatus = styled.div<Parameters<typeof badgeVariants>[0]>`
  position: absolute;
  left: calc(100% + 1rem);
  top: 0;
  height: 100%;
  width: 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;
  ${badgeVariants}
`;

interface SectionLinkProps {
  story?: string;
  name?: string;
  kind?: string;
  box?: boolean;
}

export const SectionLink = styled('a', {
  shouldForwardProp: (prop) =>
    prop === 'story' || shouldForwardProp(prop as string),
})<SectionLinkProps>`
  color: inherit;
  &:hover {
    text-decoration: none;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`.withComponent((props) => <LinkTo {...props} story={props.name} />);

export const Link = Anchor.withComponent(
  (props: { name?: string; kind?: string }) => (
    <LinkTo {...props} story={props.name} />
  )
);

SectionLink.defaultProps = {
  story: 'page',
};

export const Code = styled.code`
  max-width: 100%;
  overflow-x: auto;
  line-height: 1;
  padding: 5px 7px 1px;
  white-space: nowrap;
  border-radius: 3px;
  font-size: 0.8em;
  border: 1px solid ${themed('colors.gray-200')};
  color: ${themed('colors.gray-700')};
  background-color: ${themed('colors.gray-100')};
  display: inline-block;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: themed('colors.gray-200');
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;
