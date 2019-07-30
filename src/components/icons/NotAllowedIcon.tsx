import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const NotAllowedIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 1.5c1 0 1.9.3 2.6.8l-6.3 6.3C3.8 9.9 3.5 9 3.5 8c0-2.5 2-4.5 4.5-4.5zm0 9c-1 0-1.9-.3-2.6-.8l6.3-6.3c.5.7.8 1.6.8 2.6 0 2.5-2 4.5-4.5 4.5z"/>
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
