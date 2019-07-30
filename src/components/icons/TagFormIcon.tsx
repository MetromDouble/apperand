import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagFormIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12.575 8.575h-9.15C2.638 8.575 2 9.213 2 10v2.575C2 13.362 2.638 14 3.425 14h9.15c.787 0 1.425-.638 1.425-1.425V10c0-.787-.638-1.425-1.425-1.425zm-1.575 2H4v2H3v-3h8v1zM12.575 2h-9.15C2.638 2 2 2.638 2 3.425V6c0 .787.638 1.425 1.425 1.425h9.15C13.362 7.425 14 6.787 14 6V3.425C14 2.638 13.362 2 12.575 2zM13 6.425H3V3h10v3.425z"/><path d="M4 3.75h1v2H4z"/>
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
