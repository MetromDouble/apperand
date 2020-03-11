import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const NoExtensionIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7 11l1.5-1.5 3-3L15 3l-1-1-4.5 4.5h-3v1H4V5h1V2H2v3h1v8l-1 1 1 1 2-2 1-1 .5-.5.5-.5zm-3 1V8.5h2.5v1L4 12zm2.5 1.5v.5H14v-3H9zm4-4H14v-3h-.5z"/>
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
