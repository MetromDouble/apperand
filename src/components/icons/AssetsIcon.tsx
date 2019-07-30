import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AssetsIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13 3H3c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zM3 12V8.6L5.7 6l6.3 6H3zm8.5-5c-.8 0-1.5-.7-1.5-1.5S10.7 4 11.5 4s1.5.7 1.5 1.5S12.3 7 11.5 7z"/>
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
