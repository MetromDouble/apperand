import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const JustifyContentSpaceBetweenIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9 9h3v3H9zm0-5h3v3H9zm4-2h1v12h-1zM4 9h2v3H4zm0-5h2v3H4zM2 2h1v12H2z"/>
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
