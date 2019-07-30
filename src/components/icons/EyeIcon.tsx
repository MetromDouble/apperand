import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const EyeIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 4C5.4 4 3.2 5.7 2.3 8c.8 2.3 3 4 5.7 4s4.8-1.7 5.7-4c-.9-2.3-3.1-4-5.7-4zm0 7c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/><circle cx="8" cy="8" r="1.5"/>
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
