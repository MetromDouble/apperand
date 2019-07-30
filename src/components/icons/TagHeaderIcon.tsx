import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagHeaderIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2h12v2H2zm0 10h1v1H2zm1 1h1v1H3zm1-1h1v1H4zm1 1h1v1H5zm1-1h1v1H6zm1 1h1v1H7zm1-1h1v1H8zm1 1h1v1H9zm1-1h1v1h-1zm1 1h1v1h-1zm1-1h1v1h-1zm1 1h1v1h-1zM2 6h1v1H2zm2 0h1v1H4zm2 0h1v1H6zm1 1h1v1H7zM5 7h1v1H5zM3 7h1v1H3zM2 8h1v1H2zm2 0h1v1H4zM3 9h1v1H3zm2 0h1v1H5zm1-1h1v1H6zm1 1h1v1H7zm3-3h1v1h-1zm1 1h1v1h-1zm1 1h1v1h-1zm1 1h1v1h-1zm-2 0h1v1h-1zm-1-1h1v1h-1zm2-2h1v1h-1zm1 1h1v1h-1z"/>
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
