import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TextIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 4c0-.6.4-1 1-1V2c-.6 0-1.1.3-1.5.7C7.1 2.3 6.6 2 6 2v1c.6 0 1 .4 1 1v4.1c-.4.2-.7.6-.7 1.2s.3.9.8 1.1v2.3c0 .6-.4 1-1 1v1c.6 0 1.1-.3 1.5-.7.4.4.9.7 1.5.7v-1c-.6 0-1-.4-1-1v-2.3c.4-.2.8-.6.8-1.1s-.5-1-.9-1.2V4z"/>
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
