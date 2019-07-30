import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const OriginNWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <circle cx="8" cy="8" r="1.5"/><path d="M15 8l-2.8-2.8V7H11v2h1.2v1.8zm-7 7l2.8-2.8H9V11H7v1.2H5.2z"/>
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
