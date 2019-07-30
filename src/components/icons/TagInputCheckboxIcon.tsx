import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagInputCheckboxIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12.571 4.8L8.328 9.043 6.208 6.92l-.708.707L7.621 9.75l.707.707.708-.707 4.242-4.243z"/><path d="M11 9.036V11H5V5h6v.021l.592-.592A1.419 1.419 0 0 0 10.575 4h-5.15C4.638 4 4 4.638 4 5.425v5.15C4 11.362 4.638 12 5.425 12h5.15c.787 0 1.425-.638 1.425-1.425v-2.54l-1 1z"/>
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
