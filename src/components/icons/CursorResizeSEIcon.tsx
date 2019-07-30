import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorResizeSEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4.2 2.8L2.8 4.2l7.5 7.5L9 13h4V9l-1.3 1.3z"/>
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
