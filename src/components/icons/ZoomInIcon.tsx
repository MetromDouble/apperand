import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const ZoomInIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M14.2 12.8L12 10.6c.6-.9 1-2 1-3.1 0-3-2.5-5.5-5.5-5.5S2 4.5 2 7.5 4.5 13 7.5 13c1.2 0 2.2-.4 3.1-1l2.2 2.2 1.4-1.4zM3.5 7.5c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
      <path d="M10.5 6.8H8.3V4.5H6.8v2.3H4.5v1.5h2.3v2.2h1.5V8.3h2.2z" />
    </>
  );

  return onlyPath
    ? path
    : (
      <Icon size={size} {...props}>
        {path}
      </Icon>
    );
};
