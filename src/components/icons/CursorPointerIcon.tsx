import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorPointerIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M5.5 14.5c-.8-.8-2.7-2.9-2.7-4.3C2.7 8.3 4.1 8 4.1 8l.5 1.6.4-.1v-7c0-1.2 2-1.4 2 0 0 .6.1 2.5.3 4.2 1.8.1 4 .9 5 2.1-.4 1.6-.9 5-.9 5l-5.9.7z"/>
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
