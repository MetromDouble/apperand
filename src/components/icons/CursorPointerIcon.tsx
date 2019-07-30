import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorPointerIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M11.9 6v2H11V6c0-.8-.5-1.2-1.1-1v3H9V6c0-.8-.6-1.2-1.1-1v3H7V2c0-.6-.4-1-1-1s-1 .4-1 1v8.6L3.3 8.4c-.3-.4-.9-.5-1.4-.2-.4.3-.6.9-.2 1.4l3.5 4.3c.5.7 1.3 1.1 2.2 1.1h3.9l.7-1.8c.7-1.6 1-3.3 1-5V7c0-.7-.5-1.2-1.1-1zM7 14l-1-3h1v3zm1.5.5L8 11h1l-.5 3.5zM10 14v-3h1l-1 3z"/>
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
