import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AliasIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M11.3 4h-6l1.8 1.8C5.8 7.1 5 8.8 5 10.7c0 1.4.4 2.8 1.2 3.9-.1-.4-.2-.9-.2-1.4 0-2.3 1.4-4.2 3.4-5l1.8 1.8V4z"/>
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
