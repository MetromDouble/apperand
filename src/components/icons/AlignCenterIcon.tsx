import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AlignCenterIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M14 7H2v1h2v5h3V8h2v3h3V8h2zM4 2h3v4H4zm5 2h3v2H9z"/>
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
