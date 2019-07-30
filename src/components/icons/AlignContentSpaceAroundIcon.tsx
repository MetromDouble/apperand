import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AlignContentSpaceAroundIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 8h3v3H4zm5 0h3v3H9zm-7 5h12v1H2zm2-8h3v2H4zm5 0h3v2H9zM2 2h12v1H2z"/>
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
