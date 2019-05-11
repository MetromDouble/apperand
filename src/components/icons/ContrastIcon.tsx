import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const ContrastIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M8 3C5.2 3 3 5.2 3 8s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5S6.1 4.5 8 4.5v7z" />
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
