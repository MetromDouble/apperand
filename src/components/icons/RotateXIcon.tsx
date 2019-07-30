import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RotateXIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M5.6 2H4.4l-.6 1-.6-1H2l1.2 2L2 6h1.2l.6-1 .6 1h1.2L4.4 4zM13 9c0 2.8-1.1 5-2.5 5-1.2 0-2.2-1.7-2.4-3.9H6.4L8.5 8l2.1 2.1H9.1c.2 1.7.8 2.9 1.4 2.9.8 0 1.5-1.8 1.5-4s-.7-4-1.5-4c-.6 0-1 .8-1.3 2h-1c.4-1.8 1.3-3 2.3-3C11.9 4 13 6.2 13 9z"/>
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
