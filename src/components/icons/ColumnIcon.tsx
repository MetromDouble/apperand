import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const ColumnIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M10.5 2.5h-4v11h4v-11zm3 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm-2-2h1v1h-1zm0-4h1v1h-1zm0 2h1v1h-1zm0 4h1v1h-1zm2-7h1v-1h-3v1h1zm-9 1h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm-2-2h1v1h-1zm0-4h1v1h-1zm0 2h1v1h-1zm0 4h1v1h-1zm2-7h1v-1h-3v1h1zm10 9h-3v1h3zm-9 0h-3v1h3z" />
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
