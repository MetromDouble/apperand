import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TriangleArrowEWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M14 8l-4-4v8zM2 8l4 4V4z"/>
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
