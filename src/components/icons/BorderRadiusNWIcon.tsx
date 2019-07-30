import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BorderRadiusNWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 7V5c0-.6.4-1 1-1h2V2H4c-1.1 0-2 .9-2 2v3h2zm8-5H9v1h2.5c.8 0 1.5.7 1.5 1.5V7h1V4c0-1.1-.9-2-2-2zm2 10V9h-1v2.5c0 .8-.7 1.5-1.5 1.5H9v1h3c1.1 0 2-.9 2-2zM4 14h3v-1H4.5c-.8 0-1.5-.7-1.5-1.5V9H2v3c0 1.1.9 2 2 2z"/>
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
