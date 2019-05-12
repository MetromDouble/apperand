import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const HelpIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <circle cx="8" cy="12.6" r="1.4" /><path d="M6.2 5.6c0-1.1.7-1.8 1.8-1.8s1.8.7 1.8 1.8S9.1 7.4 8 7.4h-.9v2.7h1.8V9c1.6-.4 2.7-1.8 2.7-3.4C11.6 3.6 10 2 8 2S4.4 3.6 4.4 5.6h1.8z" />
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
