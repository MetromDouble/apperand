import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ColumnCollapseIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M10.8 7V5.2L8 8l2.8 2.8V9H13V7zM3 3h4v10H3z"/>
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
