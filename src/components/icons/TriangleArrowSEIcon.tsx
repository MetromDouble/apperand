import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TriangleArrowSEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M3.9 12H12V3.9L3.9 12z"/>
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
