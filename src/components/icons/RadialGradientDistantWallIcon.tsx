import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RadialGradientDistantWallIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M10.5 10.5l-.8-.8c-1.5 1.5-3.8 1.5-5.3 0s-1.5-3.8 0-5.3 3.8-1.5 5.3 0l.9-.9c-2-2-5.1-2-7.1 0s-2 5.1 0 7.1 5.1 1.9 7-.1z"/><path d="M13.5 1v5.3H8.3c-.3-.5-.7-.8-1.3-.8-.8 0-1.5.7-1.5 1.5S6.2 8.5 7 8.5c.6 0 1-.3 1.3-.8h5.2V15H15V1h-1.5z"/>
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
