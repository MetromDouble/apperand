import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AngleArrowWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M6.8 8l4.3-4.2-1.4-1.5L4 8l5.7 5.7 1.4-1.5z"/>
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
