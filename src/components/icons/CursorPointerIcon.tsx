import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorPointerIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7.5 6.8c-.3 0-.6 0-.9.1l-.7-4.2c0-.4-.4-.7-.8-.7-.5.1-.8.5-.7.9L5.1 9l-.6.1-.9-.9c-.6.1-1.4.9-1.1 2.4.5 2 2 3.6 3.9 4.3l6-.9.6-5c-1.5-1.4-3.4-2.2-5.5-2.2z"/>
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
