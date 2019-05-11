import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const PlusIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M9 14V9h5V7H9V2H7v5H2v2h5v5z" />
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
