import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorMoveIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M14 8l-2.8-2.8V7H9V4.8h1.8L8 2 5.2 4.8H7V7H4.8V5.2L2 8l2.8 2.8V9H7v2.2H5.2L8 14l2.8-2.8H9V9h2.2v1.8z"/>
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
