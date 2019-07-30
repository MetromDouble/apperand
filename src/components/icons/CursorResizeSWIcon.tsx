import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorResizeSWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13.2 4.2l-1.4-1.4-7.5 7.5L3 9v4h4l-1.3-1.3z"/>
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
