import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CellCrossIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13.1 5.5h-2.6v-3h-5v3h-3v5h3v2.6l.9.9H11v-3h3V6.4l-.9-.9zm-.6 4h-3v3h-3v-3h-3v-3h3v-3h3v3h3v3z"/>
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
