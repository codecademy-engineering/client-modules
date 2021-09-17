import React from 'react';

import { IllustrationProps } from './types';

export const BrowserPuzzle: React.FC<IllustrationProps> = ({
  className,
  height,
  width,
}) => (
  <svg
    className={className}
    height={height}
    width={width}
    viewBox="0 0 91 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Browser Puzzler Illustration</title>
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h36.77v10.24a7.95 7.95 0 110 14.302V36.77H26.44a7.95 7.95 0 10-15.778 0H0V0z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0h36.77v10.24a7.95 7.95 0 110 14.302V36.77H26.44a7.95 7.95 0 10-15.778 0H0V0z"
      fill="#F5FCFF"
    />
    <path
      d="M36.77 0h1v-1h-1v1zM0 0v-1h-1v1h1zm36.77 10.24h-1v1.6l1.438-.701-.438-.899zm0 14.302l.438-.899-1.438-.7v1.6h1zm0 12.228v1h1v-1h-1zm-10.33 0l-.993-.123-.14 1.123h1.133v-1zm-15.778 0v1h1.132l-.14-1.124-.992.124zM0 36.77h-1v1h1v-1zM36.77-1H0v2h36.77v-2zm1 11.24V0h-2v10.24h2zm-.562.899a6.918 6.918 0 013.04-.698v-2a8.918 8.918 0 00-3.916.9l.876 1.798zm3.04-.698a6.95 6.95 0 016.95 6.95h2a8.95 8.95 0 00-8.95-8.95v2zm6.95 6.95a6.95 6.95 0 01-6.95 6.95v2a8.95 8.95 0 008.95-8.95h-2zm-6.95 6.95a6.92 6.92 0 01-3.04-.698l-.876 1.798c1.184.577 2.514.9 3.916.9v-2zm-2.478 12.43V24.541h-2V36.77h2zm-11.33 1h10.33v-2H26.44v2zm-.939-1.995c0 .295-.018.586-.054.87l1.985.248c.046-.367.07-.74.07-1.117h-2zm-6.95-6.95a6.95 6.95 0 016.95 6.95h2a8.95 8.95 0 00-8.95-8.95v2zm-6.95 6.95a6.95 6.95 0 016.95-6.95v-2a8.95 8.95 0 00-8.95 8.95h2zm.053.87a7.024 7.024 0 01-.053-.87h-2c0 .378.023.751.069 1.118l1.984-.248zM0 37.77h10.662v-2H0v2zM-1 0v36.77h2V0h-2z"
      fill="#000"
      mask="url(#a)"
    />
    <circle cx="3.308" cy="3.805" r=".824" fill="#10162F" />
    <circle cx="5.615" cy="3.805" r=".824" fill="#10162F" />
    <circle cx="7.92" cy="3.805" r=".824" fill="#10162F" />
    <mask id="b" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90.435 13.416h-36.77v9.44a7.95 7.95 0 110 15.901V49.69H31.827a7.95 7.95 0 10-15.622 0H5.466V80h84.969V13.416z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M90.435 13.416h-36.77v9.44a7.95 7.95 0 110 15.901V49.69H31.827a7.95 7.95 0 10-15.622 0H5.466V80h84.969V13.416z"
      fill="#fff"
    />
    <path
      d="M53.664 13.416v-1h-1v1h1zm36.77 0h1v-1h-1v1zm-36.77 9.44h-1v1h1v-1zm0 15.901v-1h-1v1h1zm0 10.933v1h1v-1h-1zm-21.837 0l-.982-.187-.225 1.187h1.207v-1zm-15.621 0v1h1.207l-.225-1.187-.982.187zm-10.74 0v-1h-1v1h1zm0 30.31h-1v1h1v-1zm84.969 0v1h1v-1h-1zm0-30.31h1v-1h-1v1zm0 0h-1v1h1v-1zm-36.77-35.274h36.77v-2h-36.77v2zm1 8.44v-9.44h-2v9.44h2zm-1-1v2-2zm8.95 8.951a8.95 8.95 0 00-8.95-8.95v2a6.95 6.95 0 016.95 6.95h2zm-8.95 8.95a8.95 8.95 0 008.95-8.95h-2a6.95 6.95 0 01-6.95 6.95v2zm0 0v-2 2zm1 9.933V38.757h-2V49.69h2zm-22.837 1h21.836v-2H31.827v2zm-.861-2.491c0 .446-.042.882-.122 1.304l1.965.373a8.992 8.992 0 00.157-1.677h-2zm-6.95-6.95a6.95 6.95 0 016.95 6.95h2a8.95 8.95 0 00-8.95-8.95v2zm-6.95 6.95a6.95 6.95 0 016.95-6.95v-2a8.95 8.95 0 00-8.95 8.95h2zm.121 1.304a6.993 6.993 0 01-.122-1.304h-2a9 9 0 00.157 1.677l1.965-.373zM5.466 50.69h10.74v-2H5.466v2zm1 29.31V49.69h-2V80h2zm83.969-1H5.465v2h84.97v-2zm-1-29.31V80h2V49.69h-2zm1 1v-2 2zm-1-37.274v36.273h2V13.416h-2z"
      fill="#000"
      mask="url(#b)"
    />
  </svg>
);
