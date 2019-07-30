import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const PanelCloseIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 7v2h5.2v1.8L10 8 7.2 5.2V7H2z"/><path d="M4 2v3h2V4h6v8H6v-1H4v3h10V2z"/>
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
