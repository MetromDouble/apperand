import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/Icon';

type ComboType =
  'n' |
  'ne' |
  'e' |
  'se' |
  's' |
  'sw' |
  'w' |
  'nw';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'n': (<><path d="M13.7 10.8L8 5.2l-5.7 5.7 11.4-.1z" /></>),
  'ne': (<><path d="M12 12.1V4H3.9l8.1 8.1z" /></>),
  'e': (<><path d="M5.2 13.7L10.8 8 5.2 2.3v11.4z" /></>),
  'se': (<><path d="M3.9 12H12V3.9L3.9 12z" /></>),
  's': (<><path d="M2.3 5.2L8 10.9l5.7-5.7H2.3z" /></>),
  'sw': (<><path d="M4 3.9V12h8.1L4 3.9z" /></>),
  'w': (<><path d="M10.8 2.3L5.2 8l5.7 5.7V2.3z" /></>),
  'nw': (<><path d="M12.1 4H4v8.1L12.1 4z" /></>),
};

export const TriangleArrowComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
