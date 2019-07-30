import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorResizeWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M11.2 9H13V7H4.8V5.2L2 8l2.8 2.8V9H8z"/>
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
