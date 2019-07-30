import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const NewFileIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M9 5.5h3l-3-3z"/><path d="M8 6.5v-4H4v11h8v-7H9z"/>
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
