import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const OriginEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <circle cx="8" cy="8" r="1.5"/><path d="M8 1L5.2 3.8H7V5h2V3.8h1.8zM1 8l2.8 2.8V9H5V7H3.8V5.2zm7 7l2.8-2.8H9V11H7v1.2H5.2z"/>
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
