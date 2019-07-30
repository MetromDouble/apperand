import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ItalicizeNoneIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M11 5V3H5v2h2v6H5v2h6v-2H9V5z"/>
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
