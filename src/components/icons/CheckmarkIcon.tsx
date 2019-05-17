import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const CheckmarkIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M14.7 4.5l-1.4-1.4-7.1 7.1-2.8-2.9L2 8.8l2.8 2.8L6.2 13l1.5-1.4z" />
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
