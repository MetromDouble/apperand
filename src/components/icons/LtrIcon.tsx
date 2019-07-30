import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const LtrIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 3c-.8 0-1.5.7-1.5 1.5S3.2 6 4 6v4h2V4h2v6h2V4h1V3H4zm0 10h8v1l2-2-2-2v1H4z"/>
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
