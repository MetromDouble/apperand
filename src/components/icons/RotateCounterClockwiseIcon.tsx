import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RotateCounterClockwiseIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M11.5 4.5c-2-2-5.1-2-7.1 0L3 3v4h4L5.5 5.5c1.4-1.4 3.6-1.4 4.9 0s1.4 3.6 0 4.9-3.6 1.4-4.9 0c-.3-.2-.5-.5-.6-.9l-1.1 1.1c.2.4.4.7.7.9 2 2 5.1 2 7.1 0 1.9-1.9 1.9-5.1-.1-7z"/>
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
