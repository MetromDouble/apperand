import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const OverflowScrollIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M14.8 3.8L13 2l-1.7 1.8zm-3.5 8.5L13 14l1.8-1.7zM12 5h2v5h-2zM2 12h8v1H2zm2-6h6v1H4zm1-2h5v1H5zm0 4h5v1H5zm-1 2h6v1H4z" />
    </>
  );

  return onlyPath
    ? path
    : (
      <Icon size={size}>
        {path}
      </Icon>
    );
};
