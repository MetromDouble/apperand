import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TriangleArrowEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M5.2 13.7L10.8 8 5.2 2.3v11.4z"/>
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
