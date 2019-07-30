import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TextAlignRightIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 3h12v2H2zm6 4h6v2H8zm-2 4h8v2H6z"/>
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
