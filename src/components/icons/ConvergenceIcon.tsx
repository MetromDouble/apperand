import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ConvergenceIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M5 10l-3 3 1 1 3-3 1 1V9H4l1 1zM6 5L3 2 2 3l3 3-1 1h3V4L6 5zM13 8.8V10l2-2-2-2v1.3H9v1.5h4z"/>

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
