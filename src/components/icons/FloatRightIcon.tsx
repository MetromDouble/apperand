import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const FloatRightIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 3h6v7H8zm-6 9h12v1H2zm0-3h4v1H2zm0-3h4v1H2zm0-3h4v1H2z"/>
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
