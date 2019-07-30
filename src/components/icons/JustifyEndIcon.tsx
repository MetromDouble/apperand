import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const JustifyEndIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13 2h1v12h-1zM2 4h10v3H2zm4 5h6v3H6z"/>
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
