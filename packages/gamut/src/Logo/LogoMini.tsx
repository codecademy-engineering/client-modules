import React, { forwardRef } from 'react';

import { LogoProps, LogoSvg, useColorMode } from './shared';

export const LogoMini = forwardRef<SVGSVGElement, LogoProps>(
  ({ mode, ...props }, ref) => {
    const currentMode = useColorMode(mode);

    return (
      <LogoSvg {...props} mode={currentMode} viewBox="0 0 28 22" ref={ref}>
        <title>Codecademy Logo</title>
        <path
          fill="currentColor"
          d="M19.1955 0.043956C19.1955 0.043956 19.1955 0.0659341 19.1955 0.043956C19.2179 0.0879121 19.2402 0.131868 19.2626 0.197802V21.7582C19.2626 21.8242 19.2402 21.8681 19.2179 21.8901C19.1732 21.9341 19.1285 21.956 19.0615 21.956H0.178771C0.134078 21.956 0.0893855 21.956 0.0670391 21.9341C0.0223464 21.8901 0 21.8462 0 21.7802V0.175824C0 0.0879121 0.0446927 0.021978 0.111732 0H19.0615C19.1061 0 19.1732 0.021978 19.1955 0.043956ZM17.095 19.6923V2.28571C17.095 2.1978 17.0503 2.13187 16.9832 2.10989H2.23464C2.1676 2.13187 2.12291 2.1978 2.12291 2.28571V19.6923C2.12291 19.7802 2.1676 19.8462 2.23464 19.8681H16.9832C17.0503 19.8462 17.095 19.7802 17.095 19.6923ZM27.7989 19.8681C27.933 19.8681 28 19.9341 28 20.0659V21.8022C28 21.9341 27.9106 22 27.7989 22H21.2737C21.1397 22 21.0726 21.9121 21.0726 21.8022V20.0659C21.0726 19.9341 21.162 19.8681 21.2737 19.8681H27.7989ZM8.08939 8.08791C9.47486 8.08791 10.5475 8.63736 11.2849 9.51648C11.3296 9.58242 11.352 9.71429 11.2626 9.78022L10.0559 10.8352C9.96648 10.9011 9.85475 10.8791 9.78771 10.7912C9.34078 10.2857 8.84916 10 8.08939 10C7.26257 10 6.63687 10.3956 6.36872 11.1648C6.21229 11.6264 6.1676 12.1538 6.1676 12.8571C6.1676 13.5604 6.21229 14.1099 6.36872 14.5714C6.63687 15.3626 7.26257 15.7582 8.08939 15.7582C8.84916 15.7582 9.31844 15.4725 9.78771 14.967C9.85475 14.8791 9.96648 14.8791 10.0559 14.9451L11.2626 16C11.352 16.0659 11.3296 16.1758 11.2849 16.2637C10.5475 17.1209 9.47486 17.6703 8.08939 17.6703C6.23464 17.6703 4.82682 16.7692 4.2905 15.1429C4.08939 14.5714 4 13.8462 4 12.8791C4 11.9121 4.08939 11.1868 4.2905 10.6154C4.82682 8.98901 6.23464 8.08791 8.08939 8.08791Z"
        />
      </LogoSvg>
    );
  }
);
