import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AlignContentCenterIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9 3h3v3H9zM4 3h3v3H4zM2 7h12v1H2zm7 2h3v3H9zM4 9h3v3H4z"/>
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
