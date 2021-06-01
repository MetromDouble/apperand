import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const DivergenceIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 3L9 6l1 1 3-3 1 1V2h-3l1 1zM13 12l-3-3-1 1 3 3-1 1h3v-3l-1 1zM6 8.8V10l2-2-2-2v1.3H2v1.5h4z"/>

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
