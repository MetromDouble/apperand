import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const UnionIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2h2v6L8 9 7 8V2zm1 7l1-1 2 2-1 1-2-2zM6 9l1 1-1 1-1-1 1-1zm-1 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm7.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
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
