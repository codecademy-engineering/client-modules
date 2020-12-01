import { Markdown } from '@codecademy/gamut';
import styled from '@emotion/styled';
import React from 'react';

const Description = styled.div`
  margin: 2rem 0 0;
`;

export type PageSectionDescriptionProps = {
  text: string;
  className?: string;
  testId?: string;
};

export const PageSectionDescription: React.FC<PageSectionDescriptionProps> = ({
  text,
  className,
  testId,
}) => (
  <Description className={className} data-testid={testId}>
    <Markdown text={text} />
  </Description>
);
