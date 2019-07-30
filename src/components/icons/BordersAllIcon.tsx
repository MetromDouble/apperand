import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BordersAllIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9 2H2v13h13V2H9zM3 3h5v5H3V3zm0 11V9h5v5H3zm11 0H9V9h5v5zM9 8V3h5v5H9z"/>
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
