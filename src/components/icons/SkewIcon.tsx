import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const SkewIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M14 5l-2.8-2.8V4H3v2h8.2v1.8zM3 9v5h7l5-5H3zm1 1h3l-3 3v-3z" />
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
