import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorResizeNIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7 11.2V13h2V4.8h1.8L8 2 5.2 4.8H7V8z"/>
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
