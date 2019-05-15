import React, { SVGProps } from 'react';

import { defaultIconProps } from '../defaultIconProps';

export default function LearnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}>
      <title>Learn Icon</title>
      <path d="M15 16.6l4.351-4.6L15 7.4 16.324 6 22 12l-5.676 6L15 16.6zm-6 0L4.649 12 9 7.4 7.676 6 2 12l5.676 6L9 16.6z" />
    </svg>
  );
}

LearnIcon.defaultProps = defaultIconProps;
