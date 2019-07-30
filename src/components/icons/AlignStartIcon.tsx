import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AlignStartIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2h12v1H2zm2 2h3v10H4zm5 0h3v6H9z"/>
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
