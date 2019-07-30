import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CapitalizeAllIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7 13h2L6.6 4H4.2L2 13h2l.3-2h2.2l.5 2zm-2.5-3l.9-4 .9 4H4.5z"/><path d="M13 13h2l-2.4-9h-2.3L8 13h2l.3-2h2.2l.5 2zm-2.5-3l.9-4 .9 4h-1.8z"/>
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
