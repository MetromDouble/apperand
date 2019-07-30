import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagDivIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2v12h12V2H2zm10 10H4V4h8v8z"/>
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
