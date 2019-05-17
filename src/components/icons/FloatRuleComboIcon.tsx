import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType = 'left' | 'right';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'left': (<><path d="M2 3h6v7H2zm0 9h12v1H2zm8-3h4v1h-4zm0-3h4v1h-4zm0-3h4v1h-4z" /></>),
  'right': (<><path d="M8 3h6v7H8zm-6 9h12v1H2zm0-3h4v1H2zm0-3h4v1H2zm0-3h4v1H2z" /></>),
};

export const FloatRuleComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
