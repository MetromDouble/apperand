import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const JustifyContentEndIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9 9h3v3H9zm0-5h3v3H9zm4-2h1v12h-1zM5 9h3v3H5zm0-5h3v3H5z"/>
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
