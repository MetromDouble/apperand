import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const ParagraphIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M4.765 4C3.824 4 3 4.824 3 5.765s.824 1.764 1.765 1.764V13h2.353V5.176H9.47V13h2.353V5.176H13V4H4.765z" />
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
