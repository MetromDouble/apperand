import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType =
  'open' |
  'close';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'open': (<><path d="M10 9V7H4.8V5.2L2 8l2.8 2.8V9H10z" /><path d="M8 2v3h2V4h2v8h-2v-1H8v3h6V2z" /></>),
  'close': (<><path d="M2 7v2h5.2v1.8L10 8 7.2 5.2V7H2z" /><path d="M4 2v3h2V4h6v8H6v-1H4v3h10V2z" /></>),
};

export const PanelComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
