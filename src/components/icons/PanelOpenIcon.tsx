import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const PanelOpenIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M10 9V7H4.8V5.2L2 8l2.8 2.8V9H10z"/><path d="M8 2v3h2V4h2v8h-2v-1H8v3h6V2z"/>
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
