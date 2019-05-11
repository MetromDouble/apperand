import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const STIOIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M6 7V6H3v3h2v1H3v1h3V8H4V7z" />
      <path d="M14 4H3v1h4v6h1V5h6z" />
      <path d="M9 8h1v5H9zm4-2h-2v5h3V6h-1zm0 4h-1V7h1v3zM9 6h1v1H9z" />
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
