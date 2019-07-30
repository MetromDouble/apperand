import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RtlIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M6 3c-.8 0-1.5.7-1.5 1.5S5.2 6 6 6v4h2V4h2v6h2V4h1V3H6zm6 8H4v-1l-2 2 2 2v-1h8z"/>
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
