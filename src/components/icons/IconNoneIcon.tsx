import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const IconNoneIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2h2v2H2zm4 0h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zM0 0h2v2H0zm4 0h2v2H4zm4 0h2v2H8zm4 0h2v2h-2zM0 4h2v2H0zm4 0h2v2H4zm4 0h2v2H8zm4 0h2v2h-2zM2 6h2v2H2zm4 0h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zM0 8h2v2H0zm4 0h2v2H4zm4 0h2v2H8zm4 0h2v2h-2zM2 10h2v2H2zm4 0h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zM0 12h2v2H0zm4 0h2v2H4zm4 0h2v2H8zm4 0h2v2h-2zM2 14h2v2H2zm4 0h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2z"/>
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
