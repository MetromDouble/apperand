import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagSectionIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2h1v1H2zm1 1h1v1H3zm1-1h1v1H4zm1 1h1v1H5zm1-1h1v1H6zm1 1h1v1H7zm1-1h1v1H8zm1 1h1v1H9zm1-1h1v1h-1zm1 1h1v1h-1zm1-1h1v1h-1zm1 1h1v1h-1zM2 12h1v1H2zm1 1h1v1H3zm1-1h1v1H4zm1 1h1v1H5zm1-1h1v1H6zm1 1h1v1H7zm1-1h1v1H8zm1 1h1v1H9zm1-1h1v1h-1zm1 1h1v1h-1zm1-1h1v1h-1zm1 1h1v1h-1zM2 6h6v4H2zm8 0h1v1h-1zm1 1h1v1h-1zm1 1h1v1h-1zm1 1h1v1h-1zm-2 0h1v1h-1zm-1-1h1v1h-1zm2-2h1v1h-1zm1 1h1v1h-1z"/>
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
