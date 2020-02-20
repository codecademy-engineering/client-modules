import { mount } from 'enzyme';
import React from 'react';

import { Byline } from '..';

describe('Byline', () => {
  it('displays a location when the "location" prop is passed', () => {
    const wrapper = mount(
      <Byline
        name="César Milan"
        occupation="Dog Whisperer"
        location="Los Angeles, CA"
      />
    );

    expect(wrapper.find('span[aria-label="Location"]')).toHaveLength(1);
  });

  it('passes a location className for the location span element', () => {
    const wrapper = mount(
      <Byline
        name="César Milan"
        occupation="Dog Whisperer"
        location="Los Angeles, CA"
        classNames={{ location: 'coolStyleDawg' }}
      />
    );

    const location = wrapper.find('span[aria-label="Location"]');

    expect(location.prop('className')).toBe('coolStyleDawg');
  });

  it('passes an occupation className for the occupation span element', () => {
    const wrapper = mount(
      <Byline
        name="César Milan"
        occupation="Dog Whisperer"
        classNames={{ occupation: 'evenCoolerStyleDawg' }}
      />
    );

    const occupation = wrapper.find('span[aria-label="Occupation"]');

    expect(occupation.prop('className')).toBe('evenCoolerStyleDawg');
  });

  it('combines a passed down className with the default styles for the author span element', () => {
    const wrapper = mount(
      <Byline
        name="César Milan"
        occupation="Dog Whisperer"
        classNames={{ name: 'boldNameText' }}
      />
    );

    const name = wrapper.find('span[aria-label="Name"]');

    expect(name.prop('className')).toBe('name boldNameText');
  });
});
