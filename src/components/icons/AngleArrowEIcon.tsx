import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AngleArrowEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9.2 8l-4.3 4.2 1.4 1.5L12 8 6.3 2.3 4.9 3.8z"/>
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
