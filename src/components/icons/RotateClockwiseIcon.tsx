import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RotateClockwiseIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4.5 4.5c2-2 5.1-2 7.1 0L13 3v4H9l1.5-1.5c-1.4-1.4-3.6-1.4-4.9 0s-1.4 3.6 0 4.9 3.6 1.4 4.9 0c.3-.3.5-.6.7-.9l1.1 1.1c-.2.3-.4.6-.7.9-2 2-5.1 2-7.1 0-2-1.9-2-5.1 0-7z"/>
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
