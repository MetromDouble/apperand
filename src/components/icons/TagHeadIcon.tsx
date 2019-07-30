import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagHeadIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2h12v4H2zm13 5H1v1h1v6h12V8h1V7zm-2 6H3V8h10v5z"/>
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
