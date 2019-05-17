import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const MenuBurgerIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M3 3h10v2H3zm0 4h10v2H3zm0 4h10v2H3z" />
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
