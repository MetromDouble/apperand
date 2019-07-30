import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ClearRightIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 4h6v3H2zm8 2h4v1h-4zm0-2h4v1h-4zm3.2 7.1L11 9v1H6V8H4v3c0 .6.4 1 1 1h6v1l2.2-1.9z"/>
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
