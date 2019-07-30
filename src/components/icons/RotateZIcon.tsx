import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RotateZIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M5 2H2v1h1.7L2 5v1h3V5H3.3L5 3zm7 3.4v1.1c1.2.7 2 2 2 3.4 0 2.2-1.8 4-4 4s-4-1.8-4-4C6 8 7.3 6.5 9 6v1.5l2.1-2.1-2.1-2v1.7c-2.3.5-4 2.5-4 4.9 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2-1.2-3.8-3-4.6z"/>
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
