import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorDefaultIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 10L4 2v11l2.4-2.4 1.5 3.8 1.9-.7L8.3 10z"/>
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
