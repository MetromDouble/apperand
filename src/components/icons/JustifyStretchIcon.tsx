import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const JustifyStretchIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 4h8v3H4zm0 5h8v3H4zM2 2h1v12H2zm11 0h1v12h-1z"/>
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
