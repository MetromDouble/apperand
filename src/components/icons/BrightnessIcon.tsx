import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const BrightnessIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <circle cx="8" cy="8" r="3.5" />
      <path d="M3.3 8c0-.6-.4-1-1-1h-.2c-.1.4-.1.7-.1 1s0 .6.1 1h.2c.6 0 1-.4 1-1zM4 5c.6 0 1-.4 1-1 0-.4-.2-.7-.5-.9-.5.4-1 .9-1.4 1.4.2.3.5.5.9.5zm4-1.7c.6 0 1-.4 1-1v-.2C8.6 2 8.3 2 8 2s-.6 0-1 .1v.2c0 .6.4 1 1 1zm3 .7c0 .6.4 1 1 1 .4 0 .7-.2.9-.5-.4-.5-.8-1-1.3-1.3-.4.1-.6.4-.6.8zm-6 8c0-.6-.4-1-1-1-.4 0-.7.2-.9.5.4.5.8 1 1.3 1.3.4-.1.6-.4.6-.8zm3 .7c-.6 0-1 .4-1 1v.2c.4.1.7.1 1 .1s.6 0 1-.1v-.2c0-.6-.4-1-1-1zm4-1.7c-.6 0-1 .4-1 1 0 .4.2.7.5.9.5-.4 1-.8 1.3-1.3-.1-.4-.4-.6-.8-.6zm1.9-4h-.2c-.6 0-1 .4-1 1s.4 1 1 1h.2c.1-.4.1-.7.1-1s0-.6-.1-1z" />
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
