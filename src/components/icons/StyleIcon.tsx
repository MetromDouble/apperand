import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const StyleIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M5.732 6.017L4.022 3l-1.76 3.017c-.552.955-.2 2.212.755 2.765s2.212.202 2.766-.754a2.046 2.046 0 0 0-.05-2.011zm7.978 0L12 3l-1.76 3.017c-.553.955-.201 2.212.754 2.765s2.213.202 2.766-.754a2.046 2.046 0 0 0-.05-2.011zm-3.978 4.955l-1.71-3.017-1.76 3.017c-.552.955-.2 2.212.755 2.765s2.212.201 2.766-.754a2.046 2.046 0 0 0-.05-2.011z" />
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
