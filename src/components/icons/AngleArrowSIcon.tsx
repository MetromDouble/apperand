import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AngleArrowSIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 9.2L3.8 4.9 2.3 6.3 8 12l5.7-5.7-1.5-1.4z"/>
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
