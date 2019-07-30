import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const FullscreenExitIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M14 4.5h-2.5V2h-2v4.5H14zM4.5 2v2.5H2v2h4.5V2zm7 12v-2.5H14v-2H9.5V14zM2 11.5h2.5V14h2V9.5H2z"/>
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
