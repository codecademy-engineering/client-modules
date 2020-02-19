import { mount } from 'enzyme';
import React from 'react';

import { Avatar } from '..';

describe('Avatar', () => {
  it('when an "alt" prop is passed, an "alt" attribute is added to the <img/>', () => {
    const wrapper = mount(<Avatar src="" alt="alt" />);

    expect(wrapper.find('img')).toHaveProp('alt', alt);
  });

  it('when an "alt" prop is passed, an "aria-labelledby" attribute cannot be added to the <img/>', () => {
    const wrapper = mount(<Avatar src="" alt="alt" />);

    expect(wrapper.find('img').prop('aria-labelledby')).toEqual(undefined);
  });

  it('when an "aria-labelledby" prop is passed, an "aria-labelledby" attribute is added to the <img/>', () => {
    const wrapper = mount(
      <>
        <Avatar src="" aria-labelledby="label" />
        <h1 id="label">I is label</h1>
      </>
    );
    expect(wrapper.find('img[aria-labelledby="label"]').length).toEqual(1);
  });

  it('when an "aria-labelledby" prop is passed, an "alt" attribute cannot be added to the <img/>', () => {
    const wrapper = mount(
      <>
        <Avatar src="" aria-labelledby="label" />
        <h1 id="label">I is label</h1>
      </>
    );
    expect(wrapper.find('img').prop('alt')).toEqual(undefined);
  });
});
