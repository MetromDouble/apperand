import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const DatabaseIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 2c-3.3 0-6 .7-6 1.5v2C2 6.3 4.7 7 8 7s6-.7 6-1.5v-2C14 2.7 11.3 2 8 2zm0 6.5c-3.3 0-6-.7-6-1.5v2c0 .8 2.7 1.5 6 1.5s6-.7 6-1.5V7c0 .8-2.7 1.5-6 1.5zM8 12c-3.3 0-6-.7-6-1.5v2c0 .8 2.7 1.5 6 1.5s6-.7 6-1.5v-2c0 .8-2.7 1.5-6 1.5z" />
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
