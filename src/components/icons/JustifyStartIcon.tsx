import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const JustifyStartIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 4h10v3H4zm0 5h6v3H4zM2 2h1v12H2z"/>
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
