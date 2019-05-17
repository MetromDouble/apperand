import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

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
  'n': (<><path d="M13.7 7.7L8 2 2.3 7.7l1.5 1.4L7 5.8V13h2V5.8l3.2 3.3z" /></>),
  'ne': (<><path d="M12 12V4H4v2h4.6l-5.1 5.1 1.4 1.4L10 7.4V12z" /></>),
  'e': (<><path d="M8.3 13.7L14 8 8.3 2.3 6.9 3.8 10.2 7H3v2h7.2l-3.3 3.2z" /></>),
  'se': (<><path d="M4 12h8V4h-2v4.6L4.9 3.5 3.5 4.9 8.6 10H4z" /></>),
  's': (<><path d="M2.3 8.3L8 14l5.7-5.7-1.5-1.4L9 10.2V3H7v7.2L3.8 6.9z" /></>),
  'sw': (<><path d="M4 4v8h8v-2H7.4l5.1-5.1-1.4-1.4L6 8.6V4z" /></>),
  'w': (<><path d="M7.7 2.3L2 8l5.7 5.7 1.4-1.5L5.8 9H13V7H5.8l3.3-3.2z" /></>),
  'nw': (<><path d="M12 4H4v8h2V7.4l5.1 5.1 1.4-1.4L7.4 6H12z" /></>),
};

export const SimpleArrowComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
