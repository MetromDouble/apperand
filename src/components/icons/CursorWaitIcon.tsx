import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorWaitIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 6l2-2H6z"/><path d="M13 5V1.5H3V5c1.7 0 3 1.3 3 3s-1.3 3-3 3v3.5h10V11c-1.7 0-3-1.3-3-3s1.3-3 3-3zM9 8c0 1.9 1.3 3.4 3 3.9v.6h-2l-2-2-2 2H4v-.6c1.7-.4 3-2 3-3.9S5.7 4.6 4 4.1V3h8v1.1c-1.7.5-3 2-3 3.9z"/>
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
