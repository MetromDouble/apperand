import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagIframeIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2v12h12V2H2zm11 11H3V3h10v10z"/><path d="M5.957 5.965L6.429 4h1.662l-.488 1.965h1.304L9.379 4h1.664l-.474 1.965h1.011v1.318h-1.337L9.9 8.704h1.68v1.319H9.59L9.12 12H7.456l.473-1.977H6.625L6.168 12H4.505l.473-1.977H4V8.704h1.288l.342-1.421H4V5.965h1.957zm.993 2.74h1.304l.327-1.422H7.293L6.95 8.704z"/>
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
