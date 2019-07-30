import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagUndefinedIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <circle cx="8" cy="10.5" r=".8"/><path d="M7 6.7c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1h-.5v1.5h1v-.6c.9-.2 1.5-1 1.5-1.9 0-1.1-.9-2-2-2s-2 .9-2 2h1z"/><path d="M2 2v12h12V2H2zm11 11H3V3h10v10z"/>
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
