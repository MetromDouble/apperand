import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorResizeNSIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 14l2.8-2.8H9V4.8h1.8L8 2 5.2 4.8H7v6.4H5.2z"/>
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
