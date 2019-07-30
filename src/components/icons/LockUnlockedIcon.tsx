import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const LockUnlockedIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M5.5 7V4.5C5.5 3.1 6.6 2 8 2s2.5 1.1 2.5 2.5V5H12v-.5c0-2.2-1.8-4-4-4s-4 1.8-4 4V7H3v7h10V7H5.5zM9 11.1v1.4H7v-1.4c-.3-.3-.5-.7-.5-1.1 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .4-.2.8-.5 1.1z"/>
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
