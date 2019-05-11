import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const MinusIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M11 7H2v2h12V7z" />
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
