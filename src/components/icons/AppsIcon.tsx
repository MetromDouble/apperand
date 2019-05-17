import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const AppsIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2h3v3H2zm4.5 0h3v3h-3zM11 2h3v3h-3zM2 6.5h3v3H2zm4.5 0h3v3h-3zm4.5 0h3v3h-3zM2 11h3v3H2zm4.5 0h3v3h-3zm4.5 0h3v3h-3z" />
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
