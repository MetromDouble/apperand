import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ListUnorderedIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M6 3h8v2H6zm0 4h8v2H6zm0 4h8v2H6z"/><circle cx="3.5" cy="4" r="1.5"/><circle cx="3.5" cy="8" r="1.5"/><circle cx="3.5" cy="12" r="1.5"/>
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
