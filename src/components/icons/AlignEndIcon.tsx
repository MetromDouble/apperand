import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AlignEndIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 2h3v10H4zm5 4h3v6H9zm-7 7h12v1H2z"/>
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
