import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AngleArrowStopEIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7.2 8l-4.3 4.2 1.4 1.5L10 8 4.3 2.3 2.9 3.8zM12 2h2v12h-2z"/>
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
