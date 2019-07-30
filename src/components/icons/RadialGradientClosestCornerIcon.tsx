import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RadialGradientClosestCornerIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7 5.5c-.1 0-.3 0-.4.1L2.9 1.9l.9-.9H1v2.8l.9-.9 3.7 3.7c0 .1-.1.3-.1.4 0 .8.7 1.5 1.5 1.5S8.5 7.8 8.5 7 7.8 5.5 7 5.5z"/><path d="M7 2v1.3c2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8-2.1 0-3.8-1.7-3.8-3.8H2c0 2.8 2.2 5 5 5s5-2.2 5-5S9.8 2 7 2z"/>
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
