import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TilesAllIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M1.5 1.5h3v3h-3zm5 0h3v3h-3zm5 0h3v3h-3zm-10 5h3v3h-3zm5 0h3v3h-3zm5 0h3v3h-3zm-10 5h3v3h-3zm5 0h3v3h-3zm5 0h3v3h-3z"/>
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
