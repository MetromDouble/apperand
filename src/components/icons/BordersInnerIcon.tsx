import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BordersInnerIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M6 14h1v1H6zM6 2h1v1H6zM2 2h1v1H2zm0 12h1v1H2zm0-8h1v1H2zm0 4h1v1H2zm0-6h1v1H2zm0 8h1v1H2zm2 2h1v1H4zM4 2h1v1H4zm8 0h1v1h-1zm0 12h1v1h-1zm-2 0h1v1h-1zm0-12h1v1h-1zm4 0h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1z"/><path d="M15 8H9V2H8v6H2v1h6v6h1V9h6z"/>
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
