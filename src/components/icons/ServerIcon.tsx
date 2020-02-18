import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ServerIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13 6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h4v1H3c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h4v1.3H4v1.5h8v-1.5H9V11h4c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1H9V6h4zm-1.5 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm0-5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/>
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
