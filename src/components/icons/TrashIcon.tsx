import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const TrashIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M5 6v6c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V6H5zm7-1.1c-.1-.5-.5-.9-1-.9h-1c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1H5c-.5 0-.9.4-1 .9h8z" />
    </>
  );

  return onlyPath
    ? path
    : (
      <Icon size={size}>
        {path}
      </Icon>
    );
};
