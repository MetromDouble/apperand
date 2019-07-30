import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TextAlignLeftIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 3h12v2H2zm0 4h6v2H2zm0 4h8v2H2z"/>
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
