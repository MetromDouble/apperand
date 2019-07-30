import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const DisplayInlineBlockIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M3 13V3h1V2H2v12h2v-1zM13 2h-1v1h1v10h-1v1h2V2zm-3 2H4v8h8V4h-2zm0 6H6V6h4v4z"/>
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
