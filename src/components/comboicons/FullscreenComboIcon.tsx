import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/Icon';

type ComboType = 'enable' | 'disable';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'enable': (<><path d="M9.5 4H12v2.5h2V2H9.5zM4 6.5V4h2.5V2H2v4.5zm8 3V12H9.5v2H14V9.5zM6.5 12H4V9.5H2V14h4.5z" /></>),
  'disable': (<><path d="M14 4.5h-2.5V2h-2v4.5H14zM4.5 2v2.5H2v2h4.5V2zm7 12v-2.5H14v-2H9.5V14zM2 11.5h2.5V14h2V9.5H2z" /></>),
};

export const FullscreenComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
