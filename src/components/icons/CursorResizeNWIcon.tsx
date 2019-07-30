import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorResizeNWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M11.8 13.2l1.4-1.4-7.5-7.5L7 3H3v4l1.3-1.3z"/>
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
