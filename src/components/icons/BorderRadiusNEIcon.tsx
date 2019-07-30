import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BorderRadiusNEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9 4h2c.6 0 1 .4 1 1v2h2V4c0-1.1-.9-2-2-2H9v2zm5 8V9h-1v2.5c0 .8-.7 1.5-1.5 1.5H9v1h3c1.1 0 2-.9 2-2zM4 14h3v-1H4.5c-.8 0-1.5-.7-1.5-1.5V9H2v3c0 1.1.9 2 2 2zM2 4v3h1V4.5C3 3.7 3.7 3 4.5 3H7V2H4c-1.1 0-2 .9-2 2z"/>
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
