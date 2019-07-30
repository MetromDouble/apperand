import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ListItemIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M6 7h8v2H6z"/><circle cx="3.5" cy="8" r="1.5"/>
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
