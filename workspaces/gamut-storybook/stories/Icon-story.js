import React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import Icon from '@codecademy/gamut/dist/Icon';
import iconMap from '@codecademy/gamut/dist/Icon/iconMap';
import { selectableColors } from './helpers';
import { addonInfoOptions as options } from './options';
import s from './Icon-story.scss';

const iconNames = Object.keys(iconMap);

export default {
  title: 'Component/Icon (deprecated)',
  decorators: [withKnobs],
};

export const allIcons = () => (
  <div className={s.grid}>
    {iconNames.map(iconName => (
      <span className={s.iconWrapper}>
        <Icon key={iconName} name={iconName} />
        <span>{iconName}</span>
      </span>
    ))}
  </div>
);

allIcons.story = {
  name: 'All Icons',
};

export const editableIcon = () => (
  <Icon
    name={select('name', iconNames, iconNames[0])}
    width={number('width', 128)}
    height={number('height', 128)}
    style={{
      color: select('color', selectableColors, 'black'),
      backgroundColor: select('backgroundColor', selectableColors, 'white'),
    }}
  />
);

editableIcon.story = {
  name: 'Editable Icon',
};
