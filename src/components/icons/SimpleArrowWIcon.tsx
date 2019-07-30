import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const SimpleArrowWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7.7 2.3L2 8l5.7 5.7 1.4-1.5L5.8 9H13V7H5.8l3.3-3.2z"/>
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
