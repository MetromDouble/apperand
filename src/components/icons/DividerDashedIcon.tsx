import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const DividerDashedIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7 3h2v3H7zm0 4h2v3H7zm0 4h2v3H7z"/>
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
