import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorDragIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M11.9 5v2H11V5c0-.8-.5-1.2-1.1-1v3H9V4.8c0-.5-.3-.8-.7-.8-.4 0-.8.3-.8.8V7h-1V5C6.1 4.7 5 4.8 5 6v3.6l-.2-.3c-.3-.4-.9-.5-1.4-.2-.4.3-.5.9-.2 1.4l2 2.5c.5.6 1.3 1 2.2 1h3.9l.7-1.8c.7-1.6 1-3.3 1-5V6c0-.7-.5-1.2-1.1-1zM7 13l-1-3h1v3zm1.5.5L8 10h1l-.5 3.5zM10 13v-3h1l-1 3z"/>
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
