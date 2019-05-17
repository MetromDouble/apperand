import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType = 'enabled' | 'disabled';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'enabled': (<><path d="M12 5V3H6v2h1.8l-1.7 6H4v2h6v-2H8.2l1.7-6z" /></>),
  'disabled': (<><path d="M11 5V3H5v2h2v6H5v2h6v-2H9V5z" /></>),
};

export const ItalicizeComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
