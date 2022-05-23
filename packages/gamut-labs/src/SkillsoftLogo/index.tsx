import { styledOptions, system } from '@codecademy/gamut-styles';
import { StyleProps, variance } from '@codecademy/variance';
import styled from '@emotion/styled';
import React from 'react';

const fromLogoStyles = variance.compose(
  system.layout,
  system.color,
  system.space,
  system.positioning
);

export interface SkillsoftLogoIconStyleProps
  extends StyleProps<typeof fromLogoStyles> {}

export interface SkillsoftLogoIconProps
  extends Omit<
      React.SVGProps<SVGSVGElement>,
      keyof SkillsoftLogoIconStyleProps
    >,
    SkillsoftLogoIconStyleProps {}

const StyledSVGWrapper = styled('svg', styledOptions<'svg'>())(fromLogoStyles);

export const SkillsoftLogo: React.FC<SkillsoftLogoIconProps> = ({
  'aria-hidden': ariaHidden,
  color = 'text',
  height,
  width,
  ...rest
}) => {
  return (
    <StyledSVGWrapper
      aria-hidden={ariaHidden}
      color={color}
      width={width}
      height={height}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 206.5 48.3"
      xmlSpace="preserve"
      {...rest}
    >
      <title>Codecademy from Skillsoft</title>

      <path
        fill="currentColor"
        d="M182.5,43.4c-0.3-0.7-0.9-1.3-1.6-1.7c-0.8-0.3-1.6-0.3-2.4,0c-0.4,0.2-0.7,0.4-1,0.7c-0.3,0.3-0.5,0.6-0.7,1
		c-0.3,0.8-0.3,1.6,0,2.4c0.2,0.4,0.4,0.7,0.7,1c0.3,0.3,0.6,0.5,1,0.7c0.8,0.3,1.6,0.3,2.4,0c0.4-0.2,0.7-0.4,1-0.7
		c0.3-0.3,0.5-0.6,0.7-1C182.8,45,182.8,44.2,182.5,43.4L182.5,43.4z M182,45.6c-0.1,0.3-0.3,0.6-0.5,0.8c-0.2,0.2-0.5,0.4-0.8,0.5
		c-0.3,0.1-0.7,0.2-1,0.2c-0.3,0-0.7-0.1-1-0.2c-0.6-0.3-1.1-0.8-1.4-1.4c-0.1-0.3-0.2-0.7-0.2-1c0-0.3,0.1-0.7,0.2-1
		c0.1-0.3,0.3-0.6,0.6-0.8c0.2-0.2,0.5-0.4,0.8-0.5c0.3-0.1,0.7-0.2,1-0.2c0.3,0,0.7,0.1,1,0.2c0.3,0.1,0.6,0.3,0.8,0.5
		c0.2,0.2,0.4,0.5,0.5,0.8c0.1,0.3,0.2,0.7,0.2,1C182.2,44.9,182.1,45.3,182,45.6z M180.2,44.8c0.2,0,0.4-0.1,0.6-0.3
		c0.2-0.2,0.3-0.4,0.2-0.7c0-0.3-0.1-0.6-0.3-0.8c-0.3-0.2-0.6-0.3-1-0.3h-1.4v3.6h0.6v-1.5h0.5l0.9,1.5h0.7L180.2,44.8z
		 M179.9,44.3h-0.8v-1h0.8c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0.1,0.2,0.2c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2-0.1,0.3
		c-0.1,0.1-0.1,0.1-0.2,0.2C180.1,44.3,180,44.3,179.9,44.3L179.9,44.3z"
      />

      <path
        fill="currentColor"
        d="M20.2,24l-1.1,2.3c-0.4,0.8-1,1-1.5,0.7c-2.1-1.1-4.5-1.8-6.9-1.9c-2.3,0-4,0.8-4,2.7c0,5,14.4,2.3,14.4,12.1
		c0,5.6-4.9,8.1-10.4,8.1c-3.7,0-7.3-1.1-10.3-3.3c-0.4-0.3-0.5-0.8-0.2-1.2l1.2-2.3c0.2-0.5,0.8-0.7,1.3-0.5c0.1,0,0.1,0.1,0.1,0.1
		c2.4,1.6,5.2,2.6,8.2,2.6c2.5,0,4.4-0.9,4.4-2.9c0-5.6-14.3-2.5-14.2-12.2c0-5.5,4.8-7.9,10-7.9c3.1,0,6.1,0.8,8.7,2.3
		C20.3,23,20.5,23.5,20.2,24 M30.3,40.6c0-0.3,0.1-0.5,0.3-0.7l3.4-3.6c0.4-0.4,1-0.4,1.4-0.1c0.1,0.1,0.1,0.1,0.2,0.2l7,10.9
		c0.2,0.3,0.5,0.5,0.8,0.5H48c0.6,0,1-0.4,1-1c0-0.2-0.1-0.4-0.2-0.6l-9.4-14.4c-0.3-0.4-0.2-0.9,0.1-1.3l7.9-8.2
		c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.5-0.3-0.8-0.3h-3.9c-0.3,0-0.5,0.1-0.7,0.3L31.6,31.5c-0.3,0.3-0.8,0.3-1.1,0
		c-0.1-0.1-0.2-0.3-0.2-0.5V11c0-0.6-0.4-1-1-1h-3.9c-0.6,0-1,0.4-1,1v35.8c0,0.6,0.4,1,1,1h3.8c0.6,0,1-0.4,1-1L30.3,40.6
		 M58.5,12.9c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4c0,0,0,0,0,0c0,1.9,1.5,3.4,3.4,3.4C57,16.3,58.5,14.8,58.5,12.9
		C58.5,12.9,58.5,12.9,58.5,12.9 M52.2,46.8c0,0.6,0.4,1,1,1H57c0.6,0,1-0.4,1-1V21.7c0-0.6-0.4-1-1-1h-3.8c-0.6,0-1,0.4-1,1
		L52.2,46.8 M62.8,46.8c0,0.6,0.4,1,1,1h3.8c0.6,0,1-0.4,1-1V11c0-0.6-0.4-1-1-1h-3.8c-0.6,0-1,0.4-1,1V46.8 M74.2,46.8
		c0,0.6,0.4,1,1,1H79c0.6,0,1-0.4,1-1V11c0-0.6-0.4-1-1-1h-3.8c-0.6,0-1,0.4-1,1V46.8 M104.4,24c0.2-0.5,0.1-1-0.4-1.3
		c-2.7-1.5-5.7-2.3-8.7-2.3c-5.2,0-10,2.3-10,7.9c0,9.8,14.2,6.7,14.2,12.2c0,2-1.9,2.9-4.4,2.9c-2.9-0.1-5.7-1-8.1-2.6
		c-0.5-0.3-1.1-0.2-1.4,0.2c0,0-0.1,0.1-0.1,0.1l-1.2,2.3c-0.2,0.4-0.1,0.9,0.3,1.2c3,2.2,6.6,3.3,10.3,3.2c5.5,0,10.4-2.5,10.4-8.1
		c0-9.9-14.4-7.1-14.4-12.1c0-1.9,1.7-2.7,4-2.7c2.4,0.1,4.7,0.8,6.9,1.9c0.5,0.3,1.1,0.1,1.4-0.4c0,0,0,0,0-0.1L104.4,24
		 M136.3,34.3c0-8.2-5.8-13.8-14.1-13.8S108,26,108,34.2S113.8,48,122.2,48S136.3,42.4,136.3,34.3 M113.9,34.2
		c0-5.2,3.4-8.8,8.3-8.8s8.3,3.6,8.3,8.8S127,43,122.2,43S113.9,39.5,113.9,34.2 M147.8,18.4c-0.2-1.9,1.2-3.5,3.1-3.7
		c0.2,0,0.4,0,0.6,0c1,0,2,0.3,2.8,0.7c0.5,0.3,1.1,0.1,1.4-0.4c0,0,0,0,0-0.1l1.3-2.6c0.2-0.5,0.1-1-0.4-1.3
		c-1.6-0.9-3.5-1.4-5.4-1.4c-4.7,0-9.3,3-9.3,9.3v1.6c0,0.6-0.4,1-1,1h-1.6c-0.6,0-1,0.4-1,1V25c0,0.6,0.4,1,1,1h1.6
		c0.6,0,1,0.4,1,1v19.8c0,0.6,0.4,1,1,1h3.8c0.6,0,1-0.4,1-1V27.1c0-0.6,0.4-1,1-1h5.1c0.6,0,1-0.4,1-1v-2.4c0-0.6-0.4-1-1-1h-5.1
		c-0.6,0-1-0.4-1-1L147.8,18.4 M173.7,42.7c-0.2-0.5-0.7-0.8-1.3-0.7c0,0-0.1,0-0.1,0c-1,0.4-2,0.7-3.1,0.7c-1.8,0-2.9-0.9-2.9-3.7
		v-12c0-0.6,0.4-1,1-1h6c0.6,0,1-0.4,1-1v-2.4c0-0.6-0.4-1-1-1h-6c-0.6,0-1-0.4-1-1v-5.4c0-0.6-0.4-1-1-1h-3.8c-0.6,0-1,0.4-1,1v5.4
		c0,0.6-0.4,1-1,1h-1.8c-0.6,0-1,0.4-1,1V25c0,0.6,0.4,1,1,1h1.8c0.6,0,1,0.4,1,1v13.1c0,5.6,3.5,7.9,7.6,7.9c2.1,0,4.1-0.6,5.9-1.6
		c0.5-0.2,0.7-0.8,0.5-1.3L173.7,42.7z M174.7,1.3v12.8c0,0.7,0.6,1.3,1.3,1.3c0.2,0,0.5-0.1,0.7-0.2l11.1-6.4
		c0.6-0.4,0.9-1.2,0.5-1.8c-0.1-0.2-0.3-0.4-0.5-0.5l-11.2-6.4c-0.6-0.4-1.4-0.1-1.8,0.5C174.7,0.9,174.7,1.1,174.7,1.3L174.7,1.3z
		 M192.8,1.3v12.8c0,0.7,0.6,1.3,1.3,1.3c0.2,0,0.5-0.1,0.7-0.2l11.1-6.4c0.6-0.4,0.9-1.2,0.5-1.8c-0.1-0.2-0.3-0.4-0.5-0.5
		l-11.2-6.4c-0.6-0.4-1.4-0.1-1.8,0.5C192.8,0.9,192.7,1.1,192.8,1.3L192.8,1.3z M183.8,17v12.8c0,0.7,0.6,1.3,1.3,1.3
		c0.2,0,0.5-0.1,0.7-0.2l11.1-6.4c0.6-0.4,0.9-1.2,0.5-1.8c-0.1-0.2-0.3-0.4-0.5-0.5l-11.1-6.4c-0.6-0.4-1.4-0.2-1.8,0.4
		C183.8,16.5,183.7,16.7,183.8,17L183.8,17z"
      />
    </StyledSVGWrapper>
  );
};
