import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ExclamarkNoIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7 12h2v2H7zm6-8l-1-1-3 3-2 2-4 4 1 1 3-3h2V8zM9 2H7v4l2-2z"/>
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
