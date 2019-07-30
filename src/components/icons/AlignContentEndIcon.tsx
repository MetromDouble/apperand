import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AlignContentEndIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 9h3v3H4zm5 0h3v3H9zm-7 4h12v1H2zm2-8h3v3H4zm5 0h3v3H9z"/>
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
