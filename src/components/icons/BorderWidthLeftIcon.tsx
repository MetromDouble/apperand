import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BorderWidthLeftIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 13V2H2v12h2zM5 3h8v10H5v1h9V2H5z"/>
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
