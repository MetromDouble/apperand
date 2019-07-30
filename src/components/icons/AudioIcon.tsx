import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AudioIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 4L6 6H3v4h3l2 2zm3 4zM9.5 5.4l-.5.9c.6.3 1 1 1 1.7s-.4 1.4-1 1.7l.5.9C10.4 10 11 9.1 11 8s-.6-2.1-1.5-2.6z"/><path d="M10.6 3.6l-.6 1c1.1.7 1.9 1.9 1.9 3.3 0 1.5-.8 2.7-2 3.4l.6 1C12 11.4 13 9.7 13 7.9c0-1.8-1-3.4-2.4-4.3zM13 7.9z"/>
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
