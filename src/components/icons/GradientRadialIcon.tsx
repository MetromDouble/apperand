import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const GradientRadialIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M2 2v12h12V2H2zm11 11H3V3h10v10z"/><circle cx="8" cy="8" r="2.3"/><path d="M8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-7C6.3 5 5 6.3 5 8s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/><path d="M8 13.5C5 13.5 2.5 11 2.5 8S5 2.5 8 2.5 13.5 5 13.5 8 11 13.5 8 13.5zM8 3C5.2 3 3 5.2 3 8s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"/>
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
