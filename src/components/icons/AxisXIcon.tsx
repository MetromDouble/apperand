import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AxisXIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <circle cx="8.5" cy="9.5" r="1.5"/><path d="M9 9h5v1H9zm-.5-2c.2 0 .3 0 .5.1V4H8v3.1c.2-.1.3-.1.5-.1zm-2.1 3.9l-2.3 2.3.7.7 2.3-2.3c-.3-.2-.5-.4-.7-.7zM5.6 2H4.4l-.6 1-.6-1H2l1.2 2L2 6h1.2l.6-1 .6 1h1.2L4.4 4z"/><path d="M12.9 11.6L15 9.5l-2.1-2.1z"/>
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
