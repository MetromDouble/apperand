import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorProgressIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 7L3 2v6.9l1.5-1.5 1 2.4 1.1-.5L5.7 7zM10.5 10.3l.5-.8h-1z"/><path d="M13 9.8V8H8v1.8c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5v1.8h5v-1.8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5zm-2 1.5c0 .9.6 1.7 1.5 1.9v.3h-1.3l-.8-.8-.8.8H8.5v-.3c.9-.2 1.5-1 1.5-1.9s-.6-1.8-1.5-2v-.5h4v.6c-.9.1-1.5.9-1.5 1.9z"/>
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
