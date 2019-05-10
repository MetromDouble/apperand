import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const AccountIcon: React.FC<IIconProps> = ({ size }) => {
  return (
    <Icon size={size}>
      <path d="M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8.5c-1.7 0-3.1-.9-3.9-2.3C5.2 9.4 6.6 9 8 9s2.8.4 3.9 1.2c-.8 1.4-2.2 2.3-3.9 2.3z" />
    </Icon>
  );
};
