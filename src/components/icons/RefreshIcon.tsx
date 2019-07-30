import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RefreshIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4.8 6.8c.2-.4.4-.9.8-1.3 1.3-1.4 3.5-1.4 4.9 0L9 7h4V3l-1.4 1.5c-2-2-5.1-2-7.1 0-.5.5-.9 1.1-1.2 1.8l1.5.5zm6.4 2.4c-.2.5-.4.9-.8 1.3-1.3 1.4-3.5 1.4-4.9 0L7 9H3v4l1.4-1.5c2 2 5.1 2 7.1 0 .5-.5.9-1.1 1.2-1.8l-1.5-.5z"/>
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
