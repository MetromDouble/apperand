import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RowResizeIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9 7V4.8h1.8L8 2 5.2 4.8H7V7H3v1h10V7zm0 2H7v2.2H5.2L8 14l2.8-2.8H9z"/>
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
