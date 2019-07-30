import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagTextareaIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12.575 2h-9.15C2.638 2 2 2.638 2 3.425v9.15C2 13.362 2.638 14 3.425 14h9.15c.787 0 1.425-.638 1.425-1.425v-9.15C14 2.638 13.362 2 12.575 2zM13 13H3V3h10v10z"/><path d="M6 5V4H4v1h.5v2H4v1h2V7h-.5V5z"/>
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
