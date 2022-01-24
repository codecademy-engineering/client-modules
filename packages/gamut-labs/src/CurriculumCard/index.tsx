import { Card, FlexBox, HeadingTags, ProLabel, Text } from '@codecademy/gamut';
import { pxRem } from '@codecademy/gamut-styles';
import React from 'react';

import { TagColor } from './BottomTag/index';
import { Footer } from './Footer/index';
import { Image } from './Image/index';
import { Subtitle, SubtitleProps } from './Subtitle';

export type ProgressState = 'inProgress' | 'completed';

export type FooterTextVariantType = 'enrolled' | 'inProgress';

const cardSizes = {
  small: 180,
  medium: 285,
  large: 392,
} as const;

const cardStyles = {
  inProgress: 'yellow',
  completed: 'navy',
} as const;

export type CurriculumCardProps = SubtitleProps & {
  beta?: boolean;
  text: string;
  title: string;
  headingLevel?: HeadingTags;
  image?: string;
  progressState?: ProgressState;
  showProLogo?: boolean;
  size?: 'small' | 'medium' | 'large';
  tag?: string;
  tagColor?: TagColor;
  showAltSubtitle?: boolean;
  /**
   * Changes In Progress card footer text from "Enrolled..." to "In Progress..."
   */
  footerTextVariant?: FooterTextVariantType;
  /**
   * optional text to be displayed below card subtitle
   */
  description?: string;
};

export const CurriculumCard: React.FC<CurriculumCardProps> = ({
  beta,
  difficulty,
  description,
  headingLevel = 'h3',
  image,
  progressState,
  scope,
  showProLogo,
  size = 'small',
  tag,
  tagColor,
  text,
  title,
  showAltSubtitle = false,
  footerTextVariant = 'enrolled',
}) => {
  const boxVariant = progressState && cardStyles[progressState];
  const mode = progressState === 'completed' ? 'dark' : 'light';

  return (
    <Card
      display="grid"
      gridTemplateRows="repeat(3, max-content) 1fr max-content"
      minHeight={pxRem(cardSizes[size])}
      variant={boxVariant ?? 'white'}
      shadow="medium"
      position="relative"
    >
      <Text
        display="flex"
        fontSize={14}
        mb={12}
        fontFamily="accent"
        textTransform="capitalize"
      >
        {showProLogo && <ProLabel alignSelf="center" mr={8} mode={mode} />}
        {text}
      </Text>
      <Text as={headingLevel} mb={4} fontSize={20}>
        {title}
      </Text>
      {description && (
        <Text pt={8} pb={16} fontSize={14}>
          {description}
        </Text>
      )}
      <FlexBox flexWrap="wrap">
        {!progressState && (
          <Subtitle
            scope={scope}
            difficulty={difficulty}
            showAltSubtitle={showAltSubtitle}
          />
        )}
      </FlexBox>
      <FlexBox center pb={16}>
        {size === 'large' && image && (
          <Image image={image} progressState={progressState} />
        )}
      </FlexBox>
      <Footer
        beta={beta}
        progressState={progressState}
        tag={tag}
        tagColor={tagColor}
        footerTextVariant={footerTextVariant}
      />
    </Card>
  );
};
