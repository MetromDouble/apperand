import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/Icon';

type ComboType =
  'undo' |
  'redo';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'undo': (<><path d="M1.9 8l4.2 4.2V9.7c2-.8 4.3-.5 5.9 1.1.4.4.6.8.8 1.1-.2-1.3-.9-2.6-1.9-3.6-1.2-1.3-2.9-2-4.8-2V3.8L1.9 8z" /></>),
  'redo': (<><path d="M9.9 3.8v2.5c-1.9 0-3.6.7-5 2-1 1-1.7 2.3-1.9 3.6.2-.4.5-.8.8-1.1 1.6-1.6 4-2 5.9-1.1v2.5L14.1 8 9.9 3.8z" /></>),
};

export const HistoryActionsComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
