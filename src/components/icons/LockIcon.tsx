import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const LockIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 7V6c0-2.2-1.8-4-4-4S4 3.8 4 6v1H3v7h10V7h-1zm-3 4.1v1.4H7v-1.4c-.3-.3-.5-.7-.5-1.1 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .4-.2.8-.5 1.1zM10.5 7h-5V6c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v1z"/>
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
