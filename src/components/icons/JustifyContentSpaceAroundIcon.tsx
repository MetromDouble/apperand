import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const JustifyContentSpaceAroundIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 9h3v3H8zm0-5h3v3H8zm5-2h1v12h-1zM5 9h2v3H5zm0-5h2v3H5zM2 2h1v12H2z"/>
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
