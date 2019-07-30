import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TriangleArrowNIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13.7 10.8L8 5.2l-5.7 5.7 11.4-.1z"/>
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
