import { setupRtl } from '@codecademy/gamut-tests';

import { FormGroup } from '../elements/FormGroup';
import { Input } from '../inputs/Input';

const renderView = setupRtl(FormGroup, {
  children: <Input id="up-dog" />,
});

const optionalLabelText = 'up dog (optional)';

describe('FormGroup', () => {
  it('renders Label as a label when htmlFor is provided', () => {
    const { view } = renderView({ label: 'up dog', htmlFor: 'up-dog' });

    view.getByLabelText(optionalLabelText);
  });

  it('renders Label as a div when no htmlFor is provided', () => {
    const { view } = renderView({ label: 'up dog' });

    expect(view.queryByLabelText(optionalLabelText)).toBeNull();
    view.getByText(optionalLabelText);
  });

  it('adds an asterisk to showRequired labels', () => {
    const { view } = renderView({
      label: 'up dog',
      htmlFor: 'up-dog',
      required: true,
    });

    view.getByLabelText('up dog *');
  });

  it('renders description', () => {
    const { view } = renderView({
      label: 'up dog',
      description:
        "i don't know what up dog is and at this point i'm too afraid to ask.",
    });

    view.getByText(
      "i don't know what up dog is and at this point i'm too afraid to ask."
    );
  });

  it('renders error text when there is an error', () => {
    const { view } = renderView({
      label: 'up dog',
      error: 'there is no up dog here...',
    });
    expect(view.getByRole('alert')).toHaveTextContent(
      'there is no up dog here...'
    );
  });
});
