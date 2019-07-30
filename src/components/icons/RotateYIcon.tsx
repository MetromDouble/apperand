import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RotateYIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M5.6 2H4.4l-.6 1.4L3.2 2H2l1.3 2.4V6h1V4.4zM9 7C6.2 7 4 8.1 4 9.5c0 1.2 1.7 2.2 3.9 2.4v1.7l2.1-2.1-2.1-2.1V11C6.2 10.8 5 10.2 5 9.5 5 8.7 6.8 8 9 8s4 .7 4 1.5c0 .6-.8 1-2 1.3v1c1.8-.4 3-1.3 3-2.3C14 8.1 11.8 7 9 7z"/>
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
