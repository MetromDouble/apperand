import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BordersHorizontalInnerIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M6 14h1v1H6zM6 2h1v1H6zM2 2h1v1H2zm0 12h1v1H2zm0-8h1v1H2zm0 4h1v1H2zm0-6h1v1H2zm0 8h1v1H2zm2 2h1v1H4zM4 2h1v1H4zm8 0h1v1h-1zm0 12h1v1h-1zm-4 0h1v1H8zM8 4h1v1H8zm0 6h1v1H8zm0-8h1v1H8zm0 10h1v1H8zm0-6h1v1H8zm2 8h1v1h-1zm0-12h1v1h-1zm4 0h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zM2 8h13v1H2z"/>
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
