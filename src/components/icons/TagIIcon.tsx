import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagIIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9.72 3.667l-1.972 8.144h2.04L9.5 13H4.042l.29-1.19h2.022l1.955-8.144H6.286l.29-1.19h5.456l-.289 1.19H9.72z"/>
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
