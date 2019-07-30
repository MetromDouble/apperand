import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagMetaIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12 7v1h1v5H3V8h1V7H1v1h1v6h12V8h1V7h-3zM2 2v4h2V4h8v2h2V2H2z"/><path d="M5.9 7.9l1.4-1.4-.7-.7-1.4 1.4-.7.7.7.7L6.6 10l.7-.7zm4.2 0L8.7 9.3l.7.7 1.4-1.4.7-.7-.7-.7-1.4-1.4-.7.7z"/>
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
