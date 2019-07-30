import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorContextMenuIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 7L3 2v6.9l1.5-1.5 1 2.4 1.1-.5L5.7 7zm0 1h5v1H8zm0 2h5v1H8zm0 2h5v1H8z"/>
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
