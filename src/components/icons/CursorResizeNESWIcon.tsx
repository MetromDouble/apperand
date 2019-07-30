import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorResizeNESWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M5.7 11.7l6-6L13 7V3H9l1.3 1.3-6 6L3 9v4h4z"/>
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
