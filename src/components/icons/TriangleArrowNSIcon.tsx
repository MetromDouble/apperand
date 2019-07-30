import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TriangleArrowNSIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 2L4 6h8zm0 12l4-4H4z"/>
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
