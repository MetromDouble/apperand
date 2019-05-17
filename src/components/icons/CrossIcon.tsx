import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const CrossIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12.9 11.5L9.4 8l3.5-3.5-1.4-1.4L8 6.6 4.5 3.1 3.1 4.5 6.6 8l-3.5 3.5 1.4 1.4L8 9.4l3.5 3.5z" />
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
