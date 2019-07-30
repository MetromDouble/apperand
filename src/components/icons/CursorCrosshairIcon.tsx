import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorCrosshairIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13.5 7.5h-5v-5h-1v5h-5v1h5v5h1v-5h5z"/>
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
