import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BorderRadiusCornersIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 7V5c0-.6.4-1 1-1h2V2H4c-1.1 0-2 .9-2 2v3h2zm0 4V9.1H2V12c0 1.1.9 2 2 2h3v-2H5c-.6 0-1-.4-1-1zm8-1.9V11c0 .6-.4 1-1 1H9v2h3c1.1 0 2-.9 2-2V9.1h-2zM12 5v2h2V4c0-1.1-.9-2-2-2H9v2h2c.6 0 1 .4 1 1z"/>
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
