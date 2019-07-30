import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RadialGradientDistantCornerIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M14.1 13.1L8.4 7.4c0-.1.1-.3.1-.4 0-.8-.7-1.5-1.5-1.5S5.5 6.2 5.5 7 6.2 8.5 7 8.5c.1 0 .3 0 .4-.1l5.7 5.7-.9.9H15v-2.8l-.9.9z"/><path d="M7 12v-1.3c-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8H12c0-2.8-2.2-5-5-5S2 4.2 2 7s2.2 5 5 5z"/>
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
