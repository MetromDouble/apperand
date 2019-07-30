import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TextUnderlineIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 3H4v2h3v7h2V5h3zM2 13h12v1H2z"/>
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
