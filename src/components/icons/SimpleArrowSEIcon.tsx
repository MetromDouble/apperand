import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const SimpleArrowSEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 12h8V4h-2v4.6L4.9 3.5 3.5 4.9 8.6 10H4z"/>
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
