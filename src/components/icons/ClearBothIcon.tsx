import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ClearBothIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 4h12v3H2zm12.2 7.1L12 9v1H9V8H7v2H4V9l-2.2 1.9L4 13v-1h2s1.4 0 2-1c.6 1 2 1 2 1h2v1l2.2-1.9z"/>
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
