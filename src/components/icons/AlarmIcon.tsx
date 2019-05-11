import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const AlarmIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M8 2.5C5 2.5 2.5 5 2.5 8S5 13.5 8 13.5 13.5 11 13.5 8 11 2.5 8 2.5zM8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
      <path d="M10.2 9.6L8.5 7.9V5H7v3.5l2.1 2.1zM2.566 2.64l2.598-1.5.5.865-2.598 1.5zm10.3.787l-2.598-1.5.5-.866 2.598 1.5z" />
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
