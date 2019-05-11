import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const BlurIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <circle cx="8.5" cy="4" r="1.3" />
      <circle cx="8.5" cy="8" r="1.3" />
      <circle cx="8.5" cy="12" r="1.3" />
      <circle cx="12" cy="4.5" r=".8" />
      <circle cx="12" cy="8" r=".8" />
      <circle cx="12" cy="11.5" r=".8" />
      <circle cx="4" cy="3.5" r="1.8" />
      <circle cx="4" cy="8" r="1.8" />
      <circle cx="4" cy="12.5" r="1.8" />
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
