import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AngleArrowNIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 6.8l4.2 4.3 1.5-1.4L8 4 2.3 9.7l1.5 1.4z"/>
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
