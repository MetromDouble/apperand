import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType = 'left' | 'right' | 'both';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'left': (<><path d="M8 4h6v3H8zM2 6h4v1H2zm0-2h4v1H2zm.8 7.1L5 9v1h5V8h2v3c0 .6-.4 1-1 1H5v1l-2.2-1.9z" /></>),
  'right': (<><path d="M2 4h6v3H2zm8 2h4v1h-4zm0-2h4v1h-4zm3.2 7.1L11 9v1H6V8H4v3c0 .6.4 1 1 1h6v1l2.2-1.9z" /></>),
  'both': (<><path d="M2 4h12v3H2zm12.2 7.1L12 9v1H9V8H7v2H4V9l-2.2 1.9L4 13v-1h2s1.4 0 2-1c.6 1 2 1 2 1h2v1l2.2-1.9z" /></>),
};


export const ClearRuleComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
