import { setupRtl } from '@codecademy/gamut-tests';
import { fireEvent, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { PreviewTip } from '../PreviewTip';

const info = 'I am information';
const onClick = jest.fn();
const overline = 'overline';
const username = 'username';
const renderView = setupRtl(PreviewTip, {
  linkDescription: info,
  id: 'info-id',
  href: '/',
  onClick,
});

describe('PreviewTip', () => {
  describe('inline placement', () => {
    it('renders a link desc, user name, and overline', () => {
      const { view } = renderView({
        overline,
        username,
      });

      view.getByText(`${overline} ${username} ${info}`);
    });
  });

  it('has an accessible description', async () => {
    const { view } = renderView({});

    await waitFor(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: We need to update the rest of the testing suite to use the correct types (which are reliant on upgrading Node)
      expect(view.getByRole('link')).toHaveAccessibleDescription(info);
    });
  });

  it('calls onClick when clicked', () => {
    const { view } = renderView({});

    userEvent.click(view.getByRole('link'));

    expect(onClick).toHaveBeenCalled();
  });

  describe('floating placement', () => {
    it('has an accessible description', async () => {
      const { view } = renderView({ placement: 'floating' });

      await waitFor(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: We need to update the rest of the testing suite to use the correct types (which are reliant on upgrading Node)
        expect(view.getByRole('link')).toHaveAccessibleDescription(info);
      });
    });

    it('shows the tip when it is hovered over', async () => {
      const { view } = renderView({
        placement: 'floating',
      });

      expect(view.queryAllByText(info).length).toBe(1);

      userEvent.hover(view.getByRole('link'));

      await waitFor(() => {
        expect(view.queryAllByText(info).length).toBe(2);
      });
    });

    it('calls onClick when clicked', () => {
      const { view } = renderView({});

      userEvent.click(view.getByRole('link'));

      expect(onClick).toHaveBeenCalled();
    });
  });
});
