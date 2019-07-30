import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorResizeEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4.8 7H3v2h8.2v1.8L14 8l-2.8-2.8V7H8z"/>
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
