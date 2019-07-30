import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TableRowIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M6 14h1v1H6zm-4 0h1v1H2zm0-4h1v1H2zm0 2h1v1H2zm2 2h1v1H4zm8 0h1v1h-1zm-4 0h1v1H8zm0-4h1v1H8zm0 2h1v1H8zm2 2h1v1h-1zm4-2h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zM2 2v7h13V2H2zm12 6H3V3h11v5z"/>
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
