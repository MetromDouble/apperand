import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const ScaleIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M10.4 7l2.3-2.3L14 6V2h-4l1.3 1.3L9 5.6zM5.6 9l-2.3 2.3L2 10v4h4l-1.3-1.3L7 10.4zM4 4h5V3H3v6h1zm8 3v5H7v1h6V7z" />
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
