import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const BorderStyleIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M6 14h1v1H6zm9-12H2v13h1V3h12z" />
      <path d="M4 14h1v1H4zm8 0h1v1h-1zm-4 0h1v1H8zm2 0h1v1h-1zm4-8h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zm0-6h1v1h-1z" />
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
