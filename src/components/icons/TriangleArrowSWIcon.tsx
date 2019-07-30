import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TriangleArrowSWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 3.9V12h8.1L4 3.9z"/>
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
