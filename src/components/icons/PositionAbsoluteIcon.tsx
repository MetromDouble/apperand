import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const PositionAbsoluteIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M6 2H2v4h1V3h3zm7 0v11H2v1h12V2z"/><path d="M12 3V2H7v1h2v4H7v2H3V7H2v5h1v-2h4v2h5V7h-2V3z"/>
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
