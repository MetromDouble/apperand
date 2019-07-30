import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const FullscreenIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9.5 4H12v2.5h2V2H9.5zM4 6.5V4h2.5V2H2v4.5zm8 3V12H9.5v2H14V9.5zM6.5 12H4V9.5H2V14h4.5z"/>
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
