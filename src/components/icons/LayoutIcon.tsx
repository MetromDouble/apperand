import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const LayoutIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2h5v6H2zm7 0h5v4H9zm-7 8h5v4H2zm7-2h5v6H9z" />
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
