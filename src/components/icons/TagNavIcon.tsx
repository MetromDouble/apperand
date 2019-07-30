import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagNavIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M14 9.5v-3H6.5v1H4V5h1V2H2v3h1v8h3.5v1H14v-3H6.5v1H4V8.5h2.5v1z"/>
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
