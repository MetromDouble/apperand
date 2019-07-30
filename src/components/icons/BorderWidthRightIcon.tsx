import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BorderWidthRightIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 3v11h2V2h-2zm-1 10H3V3h8V2H2v12h9z"/>
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
