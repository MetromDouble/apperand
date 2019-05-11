import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType =
  'n' |
  'e' |
  's' |
  'w';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'n': (<><path d="M13.7 10.8L8 5.2l-5.7 5.7 11.4-.1z" /></>),
  'e': (<><path d="M5.2 13.7L10.8 8 5.2 2.3v11.4z" /></>),
  's': (<><path d="M2.3 5.2L8 10.9l5.7-5.7H2.3z" /></>),
  'w': (<><path d="M10.8 2.3L5.2 8l5.7 5.7V2.3z" /></>),
};

export const TriangleArrowComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type }) => {
  return (
    <Icon size={size}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
