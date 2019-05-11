import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const DotIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <circle cx="8" cy="8" r="1.5" />
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
