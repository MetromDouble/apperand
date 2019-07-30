import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorHelpIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <circle cx="10" cy="12.847" r=".8"/><path d="M8 7L3 2v6.9l1.5-1.5 1 2.4 1.1-.5L5.7 7zm1 2c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1h-.5v1.5h1v-.6c.9-.2 1.5-1 1.5-1.9 0-1.1-.9-2-2-2s-2 .9-2 2h1z"/>
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
