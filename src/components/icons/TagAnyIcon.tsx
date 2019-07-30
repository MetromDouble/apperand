import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagAnyIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7.2 4.7L5.7 3.3 1 8l4.7 4.7 1.5-1.4L3.8 8zm3.1-1.4L8.8 4.7 12.2 8l-3.4 3.3 1.5 1.4L15 8z"/>
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
