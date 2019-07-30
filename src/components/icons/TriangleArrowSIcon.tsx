import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TriangleArrowSIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2.3 5.2L8 10.9l5.7-5.7H2.3z"/>
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
