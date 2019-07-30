import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const JustifyContentCenterIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M3 4h3v3H3zm0 5h3v3H3zm4-7h1v12H7zm2 2h3v3H9zm0 5h3v3H9z"/>
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
