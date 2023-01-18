import { Anchor, Box, FlexBox, GridBox } from '@codecademy/gamut';
import { theme, themed, variant } from '@codecademy/gamut-styles';
import styled from '@emotion/styled';
import * as React from 'react';

import { FooterHeading } from '../FooterHeading';
import { FooterLinkItem, FooterLinkItems } from '../FooterLinks';
import { GlobalFooterClickHandler } from '../types';
import downloadOnTheAppStore from './assets/download-on-the-app-store.svg';
import getItOnGooglePlay from './assets/get-it-on-google-play.png';

const MobileImageItem = styled(Box)();

MobileImageItem.defaultProps = {
  as: 'li',
  display: 'inline-block',
  my: 8,
  width: {
    _: '50%',
    md: '90%',
  },
};

const MobileImageLink = styled(Anchor)();

MobileImageLink.defaultProps = {
  display: 'inline-block',
  variant: 'interface',
};

const CatalogLinksContainer = styled.div`
  border-top: 1px solid ${themed('colors.navy')};
  margin-top: 2rem;

  ${theme.breakpoints.sm} {
    padding-top: 2rem;
  }

  ${theme.breakpoints.md} {
    border-left: 1px solid ${({ theme }) => theme.colors.navy};
    border-top: none;
    margin-left: 0;
    margin-top: 0;
    padding-left: 2rem;
    padding-top: 0;
  }

  ${theme.breakpoints.lg} {
    padding-left: 4rem;
  }
`;

const CatalogLinkArea = styled(FooterLinkItems)<{ variant?: 'fullHeight' }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  ${variant({ variants: { fullHeight: { maxHeight: { md: 'none' } } } })}
`;

const CatalogFooterLinkItem = styled(FooterLinkItem)`
  margin: 0.25rem 0;
`;

const languages = [
  ['bash', 'Bash'],
  ['c', 'C'],
  ['c-plus-plus', 'C++'],
  ['c-sharp', 'C#'],
  ['go', 'Go'],
  ['html-css', 'HTML & CSS'],
  ['java', 'Java'],
  ['javascript', 'JavaScript'],
  ['kotlin', 'Kotlin'],
  ['php', 'PHP'],
  ['python', 'Python'],
  ['r', 'R'],
  ['ruby', 'Ruby'],
  ['sql', 'SQL'],
  ['swift', 'Swift'],
];

const subjects = [
  ['artificial-intelligence', 'AI'],
  ['cloud-computing', 'Cloud Computing'],
  ['code-foundations', 'Code Foundations'],
  ['computer-science', 'Computer Science'],
  ['cybersecurity', 'Cybersecurity'],
  ['data-analytics', 'Data Analytics'],
  ['data-science', 'Data Science'],
  ['data-visualization', 'Data Visualization'],
  ['developer-tools', 'Developer Tools'],
  ['devops', 'DevOps'],
  ['game-development', 'Game Development'],
  ['information-technology', 'Information Technology'],
  ['machine-learning', 'Machine Learning'],
  ['math', 'Math'],
  ['mobile-development', 'Mobile Development'],
  ['web-design', 'Web Design'],
  ['web-development', 'Web Development'],
];

export type CatalogLinksProps = {
  onClick: GlobalFooterClickHandler;
};

// TODO: Add padding between columns
export const CatalogLinks: React.FC<CatalogLinksProps> = ({ onClick }) => {
  const languagesList = (
    <Box ml={24}>
      <FooterHeading>Languages</FooterHeading>
      <CatalogLinkArea variant="fullHeight">
        {languages.map(([slug, text]) => (
          <CatalogFooterLinkItem key={slug}>
            <Anchor
              href={`/catalog/language/${slug}`}
              onClick={(event) => onClick({ event, target: slug })}
              variant="interface"
              whiteSpace="nowrap"
            >
              {text}
            </Anchor>
          </CatalogFooterLinkItem>
        ))}
      </CatalogLinkArea>
    </Box>
  );

  const subjectsList = (
    <Box>
      <FooterHeading>Subjects</FooterHeading>
      <CatalogLinkArea variant="fullHeight">
        {subjects.map(([slug, text]) => (
          <CatalogFooterLinkItem key={slug}>
            <Anchor
              href={`/catalog/subject/${slug}`}
              onClick={(event) => onClick({ event, target: slug })}
              variant="interface"
              whiteSpace="nowrap"
            >
              {text}
            </Anchor>
          </CatalogFooterLinkItem>
        ))}
      </CatalogLinkArea>
    </Box>
  );

  // TODO: links and tracking for these
  const careerBuildingList = (
    <Box>
      {/* <FooterHeading>Career building</FooterHeading> */}
      {/* <CatalogLinkArea variant="fullHeight">
        <CatalogFooterLinkItem>
          <Anchor
            href="/catalog/all"
            onClick={(event) => onClick({ event, target: 'fullCatalog' })}
            variant="interface"
            whiteSpace="nowrap"
          >
            Career paths
          </Anchor>
        </CatalogFooterLinkItem>
        <CatalogFooterLinkItem>
          <Anchor
            href="/catalog/all"
            onClick={(event) => onClick({ event, target: 'fullCatalog' })}
            variant="interface"
            whiteSpace="nowrap"
          >
            Career services
          </Anchor>
        </CatalogFooterLinkItem>
        <CatalogFooterLinkItem>
          <Anchor
            href="/catalog/all"
            onClick={(event) => onClick({ event, target: 'fullCatalog' })}
            variant="interface"
            whiteSpace="nowrap"
          >
            Interview prep
          </Anchor>
        </CatalogFooterLinkItem>
        <CatalogFooterLinkItem>
          <Anchor
            href="/catalog/all"
            onClick={(event) => onClick({ event, target: 'fullCatalog' })}
            variant="interface"
            whiteSpace="nowrap"
          >
            Professional certification
          </Anchor>
        </CatalogFooterLinkItem>
      </CatalogLinkArea> */}
      <CatalogLinkArea>
        <CatalogFooterLinkItem aria-hidden>—</CatalogFooterLinkItem>
        <CatalogFooterLinkItem>
          <Anchor
            href="/catalog/all"
            onClick={(event) => onClick({ event, target: 'fullCatalog' })}
            variant="interface"
          >
            Full Catalog
          </Anchor>
        </CatalogFooterLinkItem>
        <CatalogFooterLinkItem>
          <Anchor
            href="/catalog/subject/beta"
            onClick={(event) => onClick({ event, target: 'betaContent' })}
            variant="interface"
          >
            Beta Content
          </Anchor>
        </CatalogFooterLinkItem>
        <CatalogFooterLinkItem>
          <Anchor
            href="https://trello.com/b/vAgDXtT6/codecademy-releases-roadmap"
            onClick={(event) => onClick({ event, target: 'roadmap' })}
            variant="interface"
          >
            Roadmap
          </Anchor>
        </CatalogFooterLinkItem>
      </CatalogLinkArea>
    </Box>
  );

  const mobile = (
    <Box>
      <FooterHeading>Mobile</FooterHeading>
      <CatalogLinkArea variant="fullHeight">
        <FooterLinkItems display="flex" flexDirection="column">
          <MobileImageItem>
            <MobileImageLink
              href="https://itunes.apple.com/us/app/codecademy-go/id1376029326"
              onClick={(event) => onClick({ event, target: 'apple_store' })}
              target="_blank"
              rel="noopener"
            >
              <img
                alt="Download on the App Store"
                height="calc(40px + 1rem)"
                src={downloadOnTheAppStore}
                width="calc(120px + 1.5rem)"
              />
            </MobileImageLink>
          </MobileImageItem>
          <MobileImageItem>
            <MobileImageLink
              href="https://play.google.com/store/apps/details?id=com.ryzac.codecademygo"
              onClick={(event) => onClick({ event, target: 'google_play' })}
              target="_blank"
              rel="noopener"
            >
              <img
                alt="Get it on Google Play"
                height="calc(40px + 1rem)"
                src={getItOnGooglePlay}
                width="calc(133px + 1.5rem)"
              />
            </MobileImageLink>
          </MobileImageItem>
        </FooterLinkItems>
      </CatalogLinkArea>
    </Box>
  );

  return (
    <CatalogLinksContainer>
      <GridBox
        gridTemplateColumns={{
          _: 'repeat(2, minmax(0, 1fr))',
          sm: 'repeat(3, minmax(0, 1fr))',
        }}
        rowGap={16}
        columnGap={24}
      >
        {subjectsList}
        {languagesList}
        <FlexBox flexDirection="column" display={{ _: 'none', sm: 'flex' }}>
          {careerBuildingList}
          {mobile}
        </FlexBox>
        <Box display={{ _: 'block', sm: 'none' }}>{careerBuildingList}</Box>
        <Box display={{ _: 'block', sm: 'none' }}>{mobile}</Box>
      </GridBox>
    </CatalogLinksContainer>
  );
};
