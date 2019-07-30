import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CapitalizeWordIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7 13h2L6.6 4H4.2L2 13h2l.3-2h2.2l.5 2zm-2.5-3l.9-4 .9 4H4.5zM14 7v1c-.4-.6-1.2-1-2-1-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.4 2-1v1h1V7h-1zm-2 4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
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
