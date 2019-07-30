import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const SimpleArrowNEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 12V4H4v2h4.6l-5.1 5.1 1.4 1.4L10 7.4V12z"/>
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
