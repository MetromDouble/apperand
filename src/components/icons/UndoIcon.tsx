import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const UndoIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M1.9 8l4.2 4.2V9.7c2-.8 4.3-.5 5.9 1.1.4.4.6.8.8 1.1-.2-1.3-.9-2.6-1.9-3.6-1.2-1.3-2.9-2-4.8-2V3.8L1.9 8z"/>
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
