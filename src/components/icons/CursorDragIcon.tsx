import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorDragIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12.1 4.5c-.3.9-.6 1.7-.6 1.7l-.4-.2s.2-1 .3-2.1c.1-.8-1.6-1.4-1.7-.9l-.4 2.4-.4-.1V2.7c0-.4-1.9-.6-1.9 0V5h-.6s-.1-1-.3-2.2c0-.2-1.8.2-1.7 1.2.2 1.3.4 2.7.7 4l-.4.1-.9-1.7s-1.3.2-1.3 2.5c0 1.5 2.3 3.9 3.2 4.8l6.5-.8c.1-1.1.4-3.4 1.2-6.3.3-1-.4-2.1-1.3-2.1z"/>
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
