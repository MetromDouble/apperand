import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const PencilIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8.9 4.1l-6.7 6.7c-.1.1-.2.3-.2.6V14h2.6c.3 0 .5-.1.7-.3L12 7 8.9 4.1zm4 2l1.4-1.4c.4-.4.4-1 0-1.4l-1.6-1.6c-.4-.4-1-.4-1.4 0L9.9 3.1l3 3z" />
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
