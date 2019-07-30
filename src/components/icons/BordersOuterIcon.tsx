import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BordersOuterIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M6 8h1v1H6zM4 8h1v1H4zm8 0h1v1h-1zM8 4h1v1H8zm0 6h1v1H8zm0-2h1v1H8zm0 4h1v1H8zm0-6h1v1H8zm2 2h1v1h-1z"/><path d="M2 2v13h13V2H2zm12 12H3V3h11v11z"/>
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
