import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagBodyIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 8h12v6H2zm12-2V2H2v4H1v1h14V6h-1zM3 6V3h10v3H3z"/>
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
