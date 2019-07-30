import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorResizeNEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2.8 11.8l1.4 1.4 7.5-7.5L13 7V3H9l1.3 1.3z"/>
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
