import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AngleArrowStopWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8.8 8l4.3-4.2-1.4-1.5L6 8l5.7 5.7 1.4-1.5zM4 14H2V2h2z"/>
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
