import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const DisplayBlockIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2h12v1H2zm0 11h12v1H2zm0-9v8h12V4H2zm10 6H4V6h8v4z"/>
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
