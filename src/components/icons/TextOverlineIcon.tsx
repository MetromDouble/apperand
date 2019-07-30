import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TextOverlineIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 4H4v2h3v7h2V6h3zM2 2h12v1H2z"/>
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
