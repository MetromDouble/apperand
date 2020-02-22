import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorGrabIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13.9 2.9c-.4-.1-.8.2-.9.6l-1 4.4c-.2-.1-.4-.2-.5-.3l.5-5.4c0-.4-.3-.8-.7-.8-.4 0-.8.3-.8.7L9.9 7c-.2 0-.4-.1-.6-.1l-.1-5.2c0-.4-.3-.7-.7-.7s-.8.3-.8.7v5.1c-.2 0-.5 0-.7.1l-.7-4.6c-.1-.4-.4-.7-.8-.7-.4.1-.7.5-.7.9l.4 3.8.5 4.6-.2.1-.5-.8s-1.5-.6-2.7-.3c-.9.2-1.4.9-1.3 1.6 2.4.2 4.5 1.5 5.8 3.5l6-.9.6-4.8 1-5.5c.1-.4-.1-.8-.5-.9z"/>
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
