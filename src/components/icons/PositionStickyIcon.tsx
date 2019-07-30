import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const PositionStickyIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13 2H2v12h12V2h-1zM5 3h1v1H5V3zM3 3h1v1H3V3zm10 10H3V5h4V3h6v10z"/><path d="M12 6l-2-2-2 2zM8 7h4v2H8zm0 3l2 2 2-2z"/>
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
