import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/Icon';

type ComboType = 'e' | 'w';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'e': (<path d="M7.2 8l-4.3 4.2 1.4 1.5L10 8 4.3 2.3 2.9 3.8zM12 2h2v12h-2z" />),
  'w': (<path d="M8.8 8l4.3-4.2-1.4-1.5L6 8l5.7 5.7 1.4-1.5zM4 14H2V2h2z" />),
};


export const AngleArrowStopComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
