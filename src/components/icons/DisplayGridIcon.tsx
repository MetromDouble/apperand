import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const DisplayGridIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13 2H2v12h12V2h-1zm0 11H3V3h10v10z"/><path d="M6 4H4v3h3V4H6zm5 0H8v3h4V4h-1zM6 8H4v4h3V8H6zm4.7 0H8v4h4V8h-1.3z"/>
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
