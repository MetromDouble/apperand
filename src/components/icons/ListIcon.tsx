import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ListIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <circle cx="5" cy="9" r="1"/><circle cx="8" cy="9" r="1"/><circle cx="11" cy="9" r="1"/><path d="M4.5 4V3h-3v11h3v-1h-2V4zM11.5 13v1h3V3h-3v1h2v9z"/>
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
