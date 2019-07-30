import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const FunctionIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M14 3V1h-3.8c-.7 0-1.4.4-1.7 1-.3.6-.6 1.3-.7 2l-.2 1H5v2h2.2L6 13H3v2h2.8c.7 0 1.4-.4 1.7-1 .3-.6.5-1.3.7-2l1-4.9H11V5H9.6l.4-2h4z"/>
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
