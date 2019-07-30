import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const FloatLeftIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 3h6v7H2zm0 9h12v1H2zm8-3h4v1h-4zm0-3h4v1h-4zm0-3h4v1h-4z"/>
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
