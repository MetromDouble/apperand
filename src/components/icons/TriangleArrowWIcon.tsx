import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TriangleArrowWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M10.8 2.3L5.2 8l5.7 5.7V2.3z"/>
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
