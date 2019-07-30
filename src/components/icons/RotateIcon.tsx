import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RotateIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <circle cx="4.5" cy="10.5" r="1.5"/><path d="M8 3c-1.4 0-2.6.6-3.5 1.5L3 3v4h4L5.5 5.5c.6-.6 1.5-1 2.5-1 1.9 0 3.5 1.6 3.5 3.5S9.9 11.5 8 11.5c-.4 0-.8-.1-1.1-.2-.2.5-.5.9-.9 1.2.6.3 1.3.5 2 .5 2.8 0 5-2.2 5-5s-2.2-5-5-5z"/>
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
