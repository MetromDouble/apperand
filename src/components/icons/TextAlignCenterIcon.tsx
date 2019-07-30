import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TextAlignCenterIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 3h12v2H2zm3 4h6v2H5zm-1 4h8v2H4z"/>
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
