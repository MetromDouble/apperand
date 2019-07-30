import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RedoIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9.9 3.8v2.5c-1.9 0-3.6.7-5 2-1 1-1.7 2.3-1.9 3.6.2-.4.5-.8.8-1.1 1.6-1.6 4-2 5.9-1.1v2.5L14.1 8 9.9 3.8z"/>
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
