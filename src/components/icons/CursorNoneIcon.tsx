import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorNoneIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12.3 2L9.1 5.1 6 2v6.3l-3.6 3.6.7.7L13 2.7zm1.7 8l-3.3-3.3L6 11.3V13l2.4-2.4 1.5 3.8 1.9-.7-1.5-3.7z"/>
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
