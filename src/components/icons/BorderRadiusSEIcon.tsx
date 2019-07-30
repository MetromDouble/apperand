import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BorderRadiusSEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 9v2c0 .6-.4 1-1 1H9v2h3c1.1 0 2-.9 2-2V9h-2zm-8 5h3v-1H4.5c-.8 0-1.5-.7-1.5-1.5V9H2v3c0 1.1.9 2 2 2zM2 4v3h1V4.5C3 3.7 3.7 3 4.5 3H7V2H4c-1.1 0-2 .9-2 2zm10-2H9v1h2.5c.8 0 1.5.7 1.5 1.5V7h1V4c0-1.1-.9-2-2-2z"/>
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
