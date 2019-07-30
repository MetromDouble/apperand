import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AlignStretchIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 4h3v8H4zm5 0h3v8H9zm-7 9h12v1H2zM2 2h12v1H2z"/>
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
