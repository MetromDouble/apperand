import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const SimpleArrowEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8.3 13.7L14 8 8.3 2.3 6.9 3.8 10.2 7H3v2h7.2l-3.3 3.2z"/>
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
