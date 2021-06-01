import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const LinkIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M6 9.5H5c-.8 0-1.5-.7-1.5-1.5S4.2 6.5 5 6.5h2V5H5C3.3 5 2 6.3 2 8s1.3 3 3 3h2V9.5H6zM11 5H9v1.5h2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H9V11h2c1.7 0 3-1.3 3-3s-1.3-3-3-3z"/><path d="M5.5 7.5h5v1h-5v-1z"/>
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
