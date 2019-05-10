import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const DashboardIcon: React.FC<IIconProps> = ({ size }) => {
  return (
    <Icon size={size}>
      <path d="M2 2h5v5H2zm7 0h5v5H9zM2 9h5v5H2zm7 0h5v5H9z" />
    </Icon>
  );
};
