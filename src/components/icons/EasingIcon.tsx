import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const EasingIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13 2.5c-.7 0-1.2.4-1.4 1H5.4c-.2-.6-.8-1-1.4-1-.8 0-1.5.7-1.5 1.5S3.2 5.5 4 5.5c.7 0 1.2-.4 1.4-1h4.1C6.9 5.7 4.9 8.1 4.4 11c-.8.1-1.4.7-1.4 1.5S3.7 14 4.5 14 6 13.3 6 12.5c0-.5-.3-1-.6-1.2.5-3.3 3.1-5.9 6.4-6.4.2.3.7.6 1.2.6.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zM4.5 13.3c-.4 0-.8-.3-.8-.8s.3-.8.8-.8.8.3.8.8-.4.8-.8.8zM13 4.8c-.4 0-.8-.3-.8-.8s.3-.8.8-.8.8.3.8.8-.4.8-.8.8z"/>
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
