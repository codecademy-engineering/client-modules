import { theme } from '@codecademy/gamut-styles';
import { setupRtl } from '@codecademy/gamut-tests';
import { matchers } from '@emotion/jest';
import React from 'react';

import { List } from '../List';
import { ListCol } from '../ListCol';
import { ListRow } from '../ListRow';

expect.extend(matchers);

const renderView = setupRtl(List, {
  children: (
    <ListRow data-testid="row-el">
      <ListCol>Hello</ListCol>
    </ListRow>
  ),
  id: 'list-el',
});

describe('List', () => {
  it('renders a default list by default', () => {
    const { view } = renderView();

    // const listEl = view.getByTestId('scrollable-list-el');
    const listEl = view.container.querySelector('ul');
    const rowEl = view.container.querySelector('li');

    expect(listEl).toHaveStyle({ borderRadius: '2px' });
    expect(rowEl).not.toHaveStyle({ minWidth: 'min-content' });
  });

  it('configures rows with the correct variants', () => {
    const { view } = renderView();

    const rowEl = view.container.querySelector('li');

    expect(rowEl).toHaveStyle({ borderTop: 'none' });
    expect(rowEl).toHaveStyle({ gap: theme.spacing[8] });
    expect(rowEl).toHaveStyleRule('gap', theme.spacing[40], {
      media: theme.breakpoints.xs,
    });
  });

  it('configures columns with the correct variants', () => {
    const { view } = renderView();

    const colEl = view.getByText('Hello');

    expect(colEl).not.toHaveStyle({ py: 16 });
    expect(colEl).toHaveStyleRule('padding-top', theme.spacing[16], {
      media: theme.breakpoints.xs,
    });
    expect(colEl).toHaveStyleRule('padding-bottom', theme.spacing[16], {
      media: theme.breakpoints.xs,
    });

    expect(colEl).not.toHaveStyle({ position: 'sticky' });
  });

  it('fixes the row header column when scrollable - but not other columns', () => {
    const { view } = renderView({
      scrollable: true,
      children: (
        <ListRow>
          <ListCol type="header">Hello</ListCol>
          <ListCol>Content</ListCol>
        </ListRow>
      ),
    });

    const headerEl = view.getByText('Hello');
    const contentEl = view.getByText('Content');

    expect(headerEl).toHaveStyle({ position: 'sticky' });
    expect(contentEl).not.toHaveStyle({ position: 'sticky' });
  });

  it('renders ListRow with expanded content when expanded is true', () => {
    const { view } = renderView({
      children: (
        <ListRow
          expanded
          renderExpanded={() => <div id="surprise">Surprise!</div>}
        >
          <ListCol type="header">Hello</ListCol>
          <ListCol>Content</ListCol>
        </ListRow>
      ),
    });

    expect(view.getByText('Surprise!'));
  });

  it('does not render ListRow with expanded content when expanded is false', () => {
    const { view } = renderView({
      children: (
        <ListRow
          expanded={false}
          renderExpanded={() => <div id="surprise">Surprise!</div>}
        >
          <ListCol type="header">Hello</ListCol>
          <ListCol>Content</ListCol>
        </ListRow>
      ),
    });
    expect(view.queryByText('Surprise!')).toBeNull();
  });
});
