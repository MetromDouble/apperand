import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TreeIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M3 3h8v2H3zm2 4h8v2H5zm0 4h8v2H5z"/>
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
