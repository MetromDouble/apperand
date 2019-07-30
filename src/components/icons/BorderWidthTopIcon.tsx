import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BorderWidthTopIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M3 4h11V2H2v2zm10 1v8H3V5H2v9h12V5z"/>
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
