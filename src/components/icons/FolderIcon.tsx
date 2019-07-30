import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const FolderIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12.5 4H9v-.5C9 2.7 8.3 2 7.5 2h-4C2.7 2 2 2.7 2 3.5v9c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-7c0-.8-.7-1.5-1.5-1.5zm0 7.8c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V6.2c0-.3.2-.5.5-.5h8c.3 0 .5.2.5.5v5.6z"/>
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
