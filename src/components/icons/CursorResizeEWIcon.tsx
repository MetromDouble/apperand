import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorResizeEWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M14 8l-2.8-2.8V7H4.8V5.2L2 8l2.8 2.8V9h6.4v1.8z"/>
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
