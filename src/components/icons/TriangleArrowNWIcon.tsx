import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TriangleArrowNWIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12.1 4H4v8.1L12.1 4z"/>
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
