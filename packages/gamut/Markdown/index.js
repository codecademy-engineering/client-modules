import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MarkdownJSX from 'markdown-to-jsx';
import s from './styles';

import Iframe from './overrides/Iframe';
import Pre from './overrides/Pre';
import Code from './overrides/Code';

const CODE_BLOCK_FENCED = /(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)*/gim;

// Makes sure there is a leading newline on fenced code blocks
const ensureCodeBlockSpacing = str => str.replace(CODE_BLOCK_FENCED, '\n$&\n');

class Markdown extends PureComponent {
  static propTypes = {
    spacing: PropTypes.oneOf(['loose', 'tight', 'none']),
    overrides: PropTypes.object,
    className: PropTypes.string,
    inline: PropTypes.bool,
    text: PropTypes.string,
  };

  render() {
    const {
      spacing = 'tight',
      text = '',
      className,
      inline = false,
      overrides: userOverrides = {},
    } = this.props;

    const spacingStyles = s[`spacing-${spacing}`];
    const classes = cx(spacingStyles, className);

    // Pass CodeBlock override into <pre /> override
    // to more consistently handle code highlighting
    const defaultOverrides = {
      iframe: Iframe,
      pre: {
        component: Pre,
        props: {
          overrides: userOverrides,
        },
      },
      code: Code,
    };

    const options = {
      overrides: {
        ...defaultOverrides,
        ...userOverrides,
      },
      forceBlock: !inline,
      forceInline: inline,
    };

    return (
      <MarkdownJSX className={classes} options={options}>
        {ensureCodeBlockSpacing(text)}
      </MarkdownJSX>
    );
  }
}

export default Markdown;
