import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const DividerDottedIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7 3h2v2H7zm0 3h2v2H7zm0 3h2v2H7zm0 3h2v2H7z"/>
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
