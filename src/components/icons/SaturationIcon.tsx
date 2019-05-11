import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const SaturationIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M11.4 8L8 2 4.5 8c-1.1 1.9-.4 4.4 1.5 5.5s4.4.4 5.5-1.5c.7-1.3.6-2.8-.1-4zM8 13c-.5 0-1-.1-1.5-.4-1.4-.8-1.9-2.7-1.1-4.1L8 4v9z" />
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
