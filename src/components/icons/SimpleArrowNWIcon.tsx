import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const SimpleArrowNWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 4H4v8h2V7.4l5.1 5.1 1.4-1.4L7.4 6H12z"/>
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
