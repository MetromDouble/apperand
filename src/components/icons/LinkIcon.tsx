import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const LinkIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M6 9.5H5a1.5 1.5 0 1 1 0-3h2V5H5a3 3 0 1 0 0 6h2V9.5H6zM11 5H9v1.5h2a1.5 1.5 0 1 1 0 3H9V11h2a3 3 0 1 0 0-6z"/><path d="M5.5 7.25h5v1.5h-5z"/>
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
