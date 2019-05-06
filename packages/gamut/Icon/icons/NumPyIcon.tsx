import React, { SVGProps } from 'react';

import { wrapIcon } from '../wrapIcon';

export default wrapIcon(function NumPyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <title>NumPy Icon</title>
      <path d="M3 17h4v4H3zM3 12h4v4H3zM3 7h4v4H3zM3 2h4v4H3zM8 7h4v4H8zM12 12h4v4h-4zM17 17h4v4h-4zM17 12h4v4h-4zM17 7h4v4h-4zM17 2h4v4h-4z" />
    </svg>
  );
});
