import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const RowIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M2.5 6.5v4h11v-4h-11zm2-4h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm-2 2h1v1h-1zm-4 0h1v1h-1zm2 0h1v1h-1zm4 0h1v1h-1zm-7-1v-1h-1v3h1v-1zm1 8h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm-2 2h1v1h-1zm-4 0h1v1h-1zm2 0h1v1h-1zm4 0h1v1h-1zm-7-1v-1h-1v3h1v-1zm9-10v3h1v-3zm0 9v3h1v-3z" />
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
