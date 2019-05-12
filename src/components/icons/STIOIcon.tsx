import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const STIOIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M4.8 6.2V4.9H1v3.7h2.5v1.2H1V11h3.8V7.4H2.3V6.2h2.5z" />
      <path d="M15 2.5H1v1.2h5.1V11h1.3V3.7H15V2.5z" />
      <path d="M11.2 4.9V11H15V4.9h-3.8zm2.5 4.9h-1.3V6.2h1.3v3.6zM8.6 4.9h1.3v1.2H8.6V4.9z" />
      <path d="M9.9 12.3V7.4H8.6v4.9H1v1.2h14v-1.2H9.9z" />
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
