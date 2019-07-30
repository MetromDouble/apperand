import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const PaperclipIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M10 4v7c0 1-.8 1.8-1.8 1.8S6.5 12 6.5 11V4c0-.3.2-.5.5-.5s.5.2.5.5v7H9V4c0-1.1-.9-2-2-2s-2 .9-2 2v7c0 1.8 1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3V4H10z"/>
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
