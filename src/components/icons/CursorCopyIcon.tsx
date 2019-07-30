import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorCopyIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 7L3 2v6.9l1.5-1.5 1 2.4 1.1-.5L5.7 7zm3 1v5h-1V8z"/><path d="M8 10h5v1H8z"/>
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
