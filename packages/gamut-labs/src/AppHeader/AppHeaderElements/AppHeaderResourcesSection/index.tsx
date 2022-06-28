import {
  Anchor,
  Box,
  Column,
  FlexBox,
  LayoutGrid,
  Text,
} from '@codecademy/gamut';
import { ColorMode, css } from '@codecademy/gamut-styles';
import styled from '@emotion/styled';
import React from 'react';

import { newHeaderResourcesList } from '../../../lib/resourcesList';
import { AppHeaderClickHandler } from '../types';

export type AppHeaderResourcesSectionProps = {
  action: AppHeaderClickHandler;
  ref?: React.RefObject<HTMLUListElement>;
  role?: string;
  id?: string;
  keyDownEvents?: (event: React.KeyboardEvent) => void;
  isOpen?: boolean;
};

const StyledColumn = styled(Column)(
  css({
    borderBottom: 1,
    borderColor: 'navy-300',
  })
);

export const AppHeaderResourcesSection = React.forwardRef<
  HTMLDivElement,
  AppHeaderResourcesSectionProps
>(({ action, isOpen, keyDownEvents }, ref) => {
  const tabIndex = isOpen === false ? -1 : 0;

  const DescriptionSection: React.FunctionComponent<{
    title: string;
    subtitle?: string;
  }> = ({ title, subtitle }) => (
    <FlexBox data-focusableresource="true" tabIndex={-1} flexDirection="column">
      <Text as="h2" variant="title-xs" mb={8} fontWeight={700}>
        {title}
      </Text>
      {subtitle && <Text fontSize={14}>{subtitle}</Text>}
    </FlexBox>
  );

  return (
    <LayoutGrid onKeyDown={keyDownEvents} ref={ref} as="ul" p={0}>
      {newHeaderResourcesList.map((section) => (
        <StyledColumn size={12} key={section.title} as="li">
          <LayoutGrid>
            <Column size={{ xs: 12, md: 3 }}>
              <Box bg="navy-800" color="blue-0" p={32}>
                <DescriptionSection
                  title={section.title}
                  subtitle={section.description}
                />
                {section.link && (
                  <ColorMode mode="dark">
                    <Anchor
                      variant="standard"
                      fontSize={14}
                      fontWeight={700}
                      textAlign={{ _: 'center', md: 'left' }}
                      href={section.link.href}
                      data-focusableresource="true"
                      onClick={(event) => action(event, section.link!)}
                      tabIndex={tabIndex}
                      mt={section.description ? 24 : 48}
                      target={section.link.newTab ? '_blank' : '_self'}
                    >
                      {section.link.text}
                    </Anchor>
                  </ColorMode>
                )}
              </Box>
            </Column>
            <Column size={{ xs: 12, md: 8 }}>
              <LayoutGrid pt={32} pb={24} pl={{ _: 16, sm: 64, md: 48 }}>
                {section.data.map((item) => (
                  <Column key={item.id} size={{ _: 4 }}>
                    <Anchor
                      data-focusableresource="true"
                      variant="interface"
                      href={item.href}
                      onClick={(event) => action(event, item)}
                      tabIndex={tabIndex}
                      pb={0}
                      target={item.newTab ? '_blank' : '_self'}
                    >
                      {'description' in item ? (
                        <>
                          <FlexBox>
                            <Text
                              fontSize={16}
                              fontWeight="bold"
                              as="h3"
                              pb={8}
                            >
                              {item.text}
                            </Text>
                            {item.badge!}
                          </FlexBox>
                          <Text fontSize={14} pb={24} pr={40}>
                            {item.description}
                          </Text>
                        </>
                      ) : (
                        <Text fontSize={16} pb={8}>
                          {item.text}
                        </Text>
                      )}
                    </Anchor>
                  </Column>
                ))}
              </LayoutGrid>
            </Column>
          </LayoutGrid>
        </StyledColumn>
      ))}
    </LayoutGrid>
  );
});
