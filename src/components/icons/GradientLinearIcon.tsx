import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const GradientLinearIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2v12h12V2H2zm11 11H3V3h10v10z"/><path d="M4 6h8v2H4zm0-2h8v1H4zm0 5h8v3H4z"/>
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
