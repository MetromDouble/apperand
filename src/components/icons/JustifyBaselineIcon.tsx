import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const JustifyBaselineIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7 14h1v-2h3V9H8V7h5V4H8V2H7v2H4v3h3v2H4v3h3v2zm0-9v1H5V5h2zm0 5v1H5v-1h2z"/>
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
