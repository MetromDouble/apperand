import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const SimpleArrowNIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13.7 7.7L8 2 2.3 7.7l1.5 1.4L7 5.8V13h2V5.8l3.2 3.3z"/>
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
