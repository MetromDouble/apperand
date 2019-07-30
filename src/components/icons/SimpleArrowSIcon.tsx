import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const SimpleArrowSIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2.3 8.3L8 14l5.7-5.7-1.5-1.4L9 10.2V3H7v7.2L3.8 6.9z"/>
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
