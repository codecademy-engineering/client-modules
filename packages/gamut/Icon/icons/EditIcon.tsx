import React, { SVGProps } from 'react';

import { defaultIconProps } from '../defaultIconProps';

export default function EditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}>
      <title>Edit Icon</title>
      <path d="M16.84 2.73c-.39 0-.77.15-1.07.44l-2.12 2.12 5.3 5.31 2.12-2.1c.6-.61.6-1.56 0-2.14L17.9 3.17c-.3-.29-.68-.44-1.06-.44M12.94 6l-8.1 8.11 2.56.28.18 2.29 2.28.17.29 2.56 8.1-8.11m-14 3.74L2.5 21.73l6.7-1.79-.24-2.16-2.31-.17-.18-2.32" />
    </svg>
  );
}

EditIcon.defaultProps = defaultIconProps;
