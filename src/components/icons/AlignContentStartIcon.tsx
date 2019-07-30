import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AlignContentStartIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9 4h3v3H9zM4 4h3v3H4zM2 2h12v1H2zm7 6h3v3H9zM4 8h3v3H4z"/>
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
