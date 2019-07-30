import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TableColumnIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 2h1v1h-1zm0 6h1v1h-1zm0 6h1v1h-1zm-2-6h1v1h-1zm0 6h1v1h-1zm0-12h1v1h-1zm4 0h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zm0-6h1v1h-1zM2 2v13h7V2H2zm6 12H3V3h5v11z"/>
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
