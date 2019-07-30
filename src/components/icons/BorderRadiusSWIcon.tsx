import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BorderRadiusSWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7 12H5c-.6 0-1-.4-1-1V9H2v3c0 1.1.9 2 2 2h3v-2zM2 4v3h1V4.5C3 3.7 3.7 3 4.5 3H7V2H4c-1.1 0-2 .9-2 2zm10-2H9v1h2.5c.8 0 1.5.7 1.5 1.5V7h1V4c0-1.1-.9-2-2-2zm2 10V9h-1v2.5c0 .8-.7 1.5-1.5 1.5H9v1h3c1.1 0 2-.9 2-2z"/>
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
