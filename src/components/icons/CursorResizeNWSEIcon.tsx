import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorResizeNWSEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M11.7 10.3l-6-6L7 3H3v4l1.3-1.3 6 6L9 13h4V9z"/>
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
