import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const JustifyContentStartIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 4h3v3H4zm0 5h3v3H4zM2 2h1v12H2zm6 2h3v3H8zm0 5h3v3H8z"/>
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
