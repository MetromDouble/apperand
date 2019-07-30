import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ItalicizeIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 5V3H6v2h1.8l-1.7 6H4v2h6v-2H8.2l1.7-6z"/>
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
