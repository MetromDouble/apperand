import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagHTMLIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2v12h12V2H2zm5 8l-1 1-2-2-1-1 1-1 2-2 1 1-2 2 2 2zm5-1l-2 2-1-1 2-2-2-2 1-1 2 2 1 1-1 1z"/>
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
