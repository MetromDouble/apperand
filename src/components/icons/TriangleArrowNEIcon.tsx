import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TriangleArrowNEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 12.1V4H3.9l8.1 8.1z"/>
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
