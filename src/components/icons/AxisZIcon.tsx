import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AxisZIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <circle cx="8.5" cy="9.5" r="1.5"/><path d="M8.177 9.048l.707.707-4.1 4.1-.708-.706zM8.5 7c.2 0 .3 0 .5.1V4H8v3.1c.2-.1.3-.1.5-.1zm2.4 2c.1.2.1.3.1.5s0 .3-.1.5H14V9h-3.1zM5 2H2v1h1.7L2 5v1h3V5H3.3L5 3z"/><path d="M4 11v3h3z"/>
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
