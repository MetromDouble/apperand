import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorResizeSIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9 4.8V3H7v8.2H5.2L8 14l2.8-2.8H9V8z"/>
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
