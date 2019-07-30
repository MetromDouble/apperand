import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ColumnResizeIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7 7H4.8V5.2L2 8l2.8 2.8V9H7v4h1V3H7zm2 0v2h2.2v1.8L14 8l-2.8-2.8V7z"/>
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
