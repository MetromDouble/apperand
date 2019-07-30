import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TextLineThroughIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M14 8H2v1h5v4h2V9h5zm-2-5H4v2h3v2h2V5h3z"/>
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
