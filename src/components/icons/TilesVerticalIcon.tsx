import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TilesVerticalIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M6.5 1.5h3v3h-3zm0 5h3v3h-3zm0 5h3v3h-3z"/>
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
