import { MockGamutProvider } from '@codecademy/gamut-tests';
import { render } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { createStubNotification } from '../__fixtures__/stubs';
import { useHeaderNotifications } from '../useHeaderNotifications';

jest.mock('../notificationRequests');

const onEnable = jest.fn();

const defaultProps = {
  actions: {
    clear: jest.fn(),
    click: jest.fn(),
    dismiss: jest.fn(),
    read: jest.fn(),
    track: jest.fn(),
  },
  onEnable,
};

describe('useHeaderNotifications', () => {
  it('returns nulls when there are no notifications', async () => {
    const hook = renderHook(() => useHeaderNotifications(undefined));

    expect(hook.result.current).toEqual([null, null]);
  });

  it('renders its notifications pane as invisible by default when there are notifications', async () => {
    const notifications = [createStubNotification()];
    const hook = renderHook(() =>
      useHeaderNotifications({ ...defaultProps, notifications })
    );

    const view = render(
      <MockGamutProvider>{hook.result.current[1]}</MockGamutProvider>
    );

    expect(view.container).toBeEmptyDOMElement();
  });

  it('renders its notifications pane as visible when the bell is clicked and there are notifications', async () => {
    const notifications = [createStubNotification()];
    const hook = renderHook(() =>
      useHeaderNotifications({ ...defaultProps, notifications })
    );

    const buttonView = render(
      <MockGamutProvider>
        {hook.result.current[0]?.renderElement()}
      </MockGamutProvider>
    );

    act(() => {
      userEvent.click(buttonView.getByRole('button'));
    });

    const paneView = render(
      <MockGamutProvider>{hook.result.current[1]}</MockGamutProvider>
    );

    expect(defaultProps.onEnable).toHaveBeenCalled();
    expect(paneView.container).not.toBeEmptyDOMElement();
  });
});
