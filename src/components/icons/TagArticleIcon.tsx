import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagArticleIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2h1v1H2zm1 1h1v1H3zm1-1h1v1H4zm1 1h1v1H5zm1-1h1v1H6zm1 1h1v1H7zm1-1h1v1H8zm1 1h1v1H9zm1-1h1v1h-1zm1 1h1v1h-1zm1-1h1v1h-1zm1 1h1v1h-1zM2 12h1v1H2zm1 1h1v1H3zm1-1h1v1H4zm1 1h1v1H5zm1-1h1v1H6zm1 1h1v1H7zm1-1h1v1H8zm1 1h1v1H9zm1-1h1v1h-1zm1 1h1v1h-1zm1-1h1v1h-1zm1 1h1v1h-1zM2 6h12v4H2z"/>
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
