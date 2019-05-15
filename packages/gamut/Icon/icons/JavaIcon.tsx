import React, { SVGProps } from 'react';

import { defaultIconProps } from '../defaultIconProps';

export default function JavaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}>
      <title>Java Icon</title>
      <g stroke="currentColor" fill="none">
        <path d="M5.954 18.842C4.14 19.114 3 19.507 3 19.943 3 20.763 7.03 22 12 22s7.875-1.3 9-2.057M8.306 18.002c-.423.118-.667.259-.667.409 0 .428 1.98.775 4.423.775 2.442 0 3.658-.415 4.422-.775M7.051 15.06c-.742.16-1.186.364-1.186.586 0 .514 2.377.93 5.31.93 2.932 0 4.545-.498 5.31-.93M7.395 11.728c-.48.048-.92.106-1.31.174-1.11.193-1.797.461-1.797.757 0 .59 2.73 1.068 6.098 1.068s5.53-.549 6.098-1.068M19.14 12.87s.423-.61 1.269-.204c.845.407.685 1.832.14 2.443-.362.407-.879.95-1.549 1.628M11.156 11.33c-1.01-.69-1.525-1.726-1.546-3.107-.031-2.071 2.728-2.693 3.122-3.936.263-.828.263-1.588 0-2.278" />
        <path d="M13.242 12.522c.197-.207 1.183-.622.394-1.865-.788-1.243-2.45-2.227-.676-3.47l1.38-1.035" />
      </g>
    </svg>
  );
}

JavaIcon.defaultProps = defaultIconProps;
