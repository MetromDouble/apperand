import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ClearLeftIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 4h6v3H8zM2 6h4v1H2zm0-2h4v1H2zm.8 7.1L5 9v1h5V8h2v3c0 .6-.4 1-1 1H5v1l-2.2-1.9z"/>
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
