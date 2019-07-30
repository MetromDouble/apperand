import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const JustifyCenterIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9 14V2H8v2H3v3h5v2H5v3h3v2zm1-10h4v3h-4zm0 5h2v3h-2z"/>
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
