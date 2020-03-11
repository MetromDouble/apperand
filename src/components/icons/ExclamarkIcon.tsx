import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ExclamarkIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7 2h2v8H7zm0 10h2v2H7z"/>
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
