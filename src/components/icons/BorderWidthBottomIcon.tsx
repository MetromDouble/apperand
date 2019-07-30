import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BorderWidthBottomIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13 12H2v2h12v-2zM3 11V3h10v8h1V2H2v9z"/>
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
