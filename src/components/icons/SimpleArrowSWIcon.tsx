import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const SimpleArrowSWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4 4v8h8v-2H7.4l5.1-5.1-1.4-1.4L6 8.6V4z"/>
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
