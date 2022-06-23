import {
  Anchor,
  Box,
  Column,
  FlexBox,
  GridBox,
  LayoutGrid,
  Text,
} from '@codecademy/gamut';
import { ColorMode, css } from '@codecademy/gamut-styles';
import styled from '@emotion/styled';
import React from 'react';

import {
  careerPaths,
  topLanguages,
  topSubjects,
} from '../../../lib/catalogList';
import {
  AppHeaderCatalogDropdownItem,
  AppHeaderClickHandler,
  AppHeaderItem,
} from '../types';

export type AppHeaderCatalogSectionProps = {
  action: AppHeaderClickHandler;
  item: AppHeaderCatalogDropdownItem;
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

const catalogAnchorData: AppHeaderItem = {
  text: 'Explore full catalog →',
  id: 'catalog',
  type: 'text-button',
  href: '/catalog',
  trackingTarget: 'topnav_catalog_explore_full',
};

const gridTemplate = `'languageHeader gap subjectHeader'
                    'language language subject'
                    'language language subject'
                    'language language subject'
                    'language language subject'
                    'language language subject'
                    'language language subject'`;

export const AppHeaderCatalogSection = React.forwardRef<
  HTMLDivElement,
  AppHeaderCatalogSectionProps
>(({ action, item, isOpen, keyDownEvents }, ref) => {
  const tabIndex = isOpen === false ? -1 : 0;

  const DescriptionSection: React.FunctionComponent<{
    title: string;
    subtitle: string;
  }> = ({ title, subtitle }) => (
    <FlexBox
      data-focusablecatalog="true"
      data-testid="title-description-section"
      tabIndex={-1}
      flexDirection="column"
    >
      <Text as="h2" variant="title-xs" mb={8} fontWeight={700}>
        {title}
      </Text>
      <Text fontSize={14}>{subtitle}</Text>
    </FlexBox>
  );

  const Subheader: React.FunctionComponent<{ title: string }> = ({ title }) => (
    <Text
      data-focusablecatalog="true"
      as="h3"
      key={item.id}
      width="12rem"
      tabIndex={-1}
      variant="p-small"
      color="navy-500"
      pb={8}
      fontFamily="accent"
    >
      {title}
    </Text>
  );

  return (
    <LayoutGrid onKeyDown={keyDownEvents} ref={ref} as="ul" p={0}>
      {!item.hideCareerPaths && (
        <StyledColumn size={12} key="Top career paths" as="li">
          <LayoutGrid>
            <Column size={{ xs: 12, md: 3 }}>
              <Box bg="navy-800" color="blue-0" p={32}>
                <DescriptionSection
                  title="Top career paths"
                  subtitle="Land an entry-level role in tech with step-by-step guidance."
                />
              </Box>
            </Column>
            <Column size={{ xs: 12, md: 8 }}>
              <LayoutGrid pt={32} pb={48} pl={{ _: 16, sm: 64, md: 48 }}>
                {careerPaths.map((item) => (
                  <Column key={item.id} size={{ _: 4 }}>
                    <Anchor
                      data-focusablecatalog="true"
                      variant="interface"
                      href={item.href}
                      onClick={(event) => action(event, item as AppHeaderItem)}
                      tabIndex={tabIndex}
                    >
                      {item.text}
                    </Anchor>
                  </Column>
                ))}
              </LayoutGrid>
            </Column>
          </LayoutGrid>
        </StyledColumn>
      )}
      <Column size={12} key="Popular languages and subjects" as="li">
        <LayoutGrid>
          <Column size={{ xs: 12, md: 3 }}>
            <Box bg="navy-800" color="blue-0" p={32}>
              <DescriptionSection
                title="Popular languages and subjects"
                subtitle="Find courses in languages or subjects that interest you."
              />
              <ColorMode mode="dark">
                <Anchor
                  variant="standard"
                  fontSize={14}
                  fontWeight={700}
                  textAlign={{ _: 'center', md: 'left' }}
                  href={catalogAnchorData.href}
                  data-focusablecatalog="true"
                  onClick={(event) => action(event, catalogAnchorData)}
                  tabIndex={tabIndex}
                  mt={96}
                  pt={24}
                >
                  {catalogAnchorData.text}
                </Anchor>
              </ColorMode>
            </Box>
          </Column>
          <Column
            size={{ xs: 12, md: 8 }}
            py={32}
            pl={{ _: 16, sm: 64, md: 48 }}
          >
            <GridBox gridTemplateAreas={gridTemplate}>
              <Box gridArea="languageHeader">
                <Subheader title="Top Languages" />
              </Box>
              <Box
                gridArea="language"
                display="grid"
                gridTemplateColumns="1fr 1fr"
              >
                {topLanguages.map((item) => (
                  <Box width="12rem" key={item.id} minHeight={36}>
                    <Anchor
                      data-focusablecatalog="true"
                      variant="interface"
                      href={item.href}
                      onClick={(event) => action(event, item as AppHeaderItem)}
                      tabIndex={tabIndex}
                    >
                      {item.text}
                    </Anchor>
                  </Box>
                ))}
              </Box>
              <Box gridArea="subjectHeader">
                <Subheader title="Top Subjects" />
              </Box>
              <Box gridArea="subject" display="grid" gridTemplateColumns="1fr">
                {topSubjects.map((item) => (
                  <Box width="12rem" key={item.id} minHeight={36}>
                    <Anchor
                      data-focusablecatalog="true"
                      variant="interface"
                      href={item.href}
                      onClick={(event) => action(event, item as AppHeaderItem)}
                      tabIndex={tabIndex}
                    >
                      {item.text}
                    </Anchor>
                  </Box>
                ))}
              </Box>
            </GridBox>
          </Column>
        </LayoutGrid>
      </Column>
    </LayoutGrid>
  );
});
