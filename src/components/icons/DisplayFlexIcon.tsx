import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const DisplayFlexIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13 2H2v12h12V2h-1zm0 11H3V3h10v10z"/><path d="M6 4H4v8h3V4H6zm5 0H8v8h4V4h-1z"/>
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
