import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType = 'x' | 'y' | 'z';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'x': (<><path d="M5.6 2H4.4l-.6 1-.6-1H2l1.2 2L2 6h1.2l.6-1 .6 1h1.2L4.4 4zM13 9c0 2.8-1.1 5-2.5 5-1.2 0-2.2-1.7-2.4-3.9H6.4L8.5 8l2.1 2.1H9.1c.2 1.7.8 2.9 1.4 2.9.8 0 1.5-1.8 1.5-4s-.7-4-1.5-4c-.6 0-1 .8-1.3 2h-1c.4-1.8 1.3-3 2.3-3C11.9 4 13 6.2 13 9z" /></>),
  'y': (<><path d="M5.6 2H4.4l-.6 1.4L3.2 2H2l1.3 2.4V6h1V4.4zM9 7C6.2 7 4 8.1 4 9.5c0 1.2 1.7 2.2 3.9 2.4v1.7l2.1-2.1-2.1-2.1V11C6.2 10.8 5 10.2 5 9.5 5 8.7 6.8 8 9 8s4 .7 4 1.5c0 .6-.8 1-2 1.3v1c1.8-.4 3-1.3 3-2.3C14 8.1 11.8 7 9 7z" /></>),
  'z': (<><path d="M5 2H2v1h1.7L2 5v1h3V5H3.3L5 3zm7 3.4v1.1c1.2.7 2 2 2 3.4 0 2.2-1.8 4-4 4s-4-1.8-4-4C6 8 7.3 6.5 9 6v1.5l2.1-2.1-2.1-2v1.7c-2.3.5-4 2.5-4 4.9 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2-1.2-3.8-3-4.6z" /></>),
};

export const RotateAxisComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
