import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CapitalizeLowercaseIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M14 7v1c-.4-.6-1.2-1-2-1-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.4 2-1v1h1V7h-1zm-2 4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM7 7v1c-.4-.6-1.2-1-2-1-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.4 2-1v1h1V7H7zm-2 4.5c-.8 0-1.5-.7-1.5-1.5S4.2 8.5 5 8.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
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
