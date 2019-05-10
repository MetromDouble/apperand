import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const ClockIcon: React.FC<IIconProps> = ({ size }) => {
  return (
    <Icon size={size}>
      <path d="M8 2.5C5 2.5 2.5 5 2.5 8S5 13.5 8 13.5 13.5 11 13.5 8 11 2.5 8 2.5zM8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
      <path d="M10.2 9.6L8.5 7.9V5H7v3.5l2.1 2.1z" />
    </Icon>
  );
};
