import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const TransitionIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <circle cx="11" cy="11" r="3" />
      <path d="M4 7c0-1.7 1.3-3 3-3h1V2H2v6h2V7z" />
      <path d="M11 7c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2 0-2.2 1.8-4 4-4z" />
    </>
  );

  return onlyPath
    ? path
    : (
      <Icon size={size}>
        {path}
      </Icon>
    );
};
