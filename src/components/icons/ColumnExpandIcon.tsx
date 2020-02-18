import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ColumnExpandIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M14 8l-2.8-2.8V7H9v2h2.2v1.8zM3 3h4v10H3z"/>
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
