import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AlignBaselineIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 7V4H9v3H7V4H4v3H2v1h2v5h3V8h2v3h3V8h2V7h-2zM5 5h1v2H5V5zm5 0h1v2h-1V5z"/>
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
