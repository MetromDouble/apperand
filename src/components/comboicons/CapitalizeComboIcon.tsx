import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/Icon';

type ComboType = 'all' | 'word' | 'lowercase';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'all': (<><path d="M7 13h2L6.6 4H4.2L2 13h2l.3-2h2.2l.5 2zm-2.5-3l.9-4 .9 4H4.5z" /><path d="M13 13h2l-2.4-9h-2.3L8 13h2l.3-2h2.2l.5 2zm-2.5-3l.9-4 .9 4h-1.8z" /></>),
  'word': (<><path d="M7 13h2L6.6 4H4.2L2 13h2l.3-2h2.2l.5 2zm-2.5-3l.9-4 .9 4H4.5zM14 7v1c-.4-.6-1.2-1-2-1-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.4 2-1v1h1V7h-1zm-2 4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" /></>),
  'lowercase': (<><path d="M14 7v1c-.4-.6-1.2-1-2-1-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.4 2-1v1h1V7h-1zm-2 4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM7 7v1c-.4-.6-1.2-1-2-1-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.4 2-1v1h1V7H7zm-2 4.5c-.8 0-1.5-.7-1.5-1.5S4.2 8.5 5 8.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" /></>),
};


export const CapitalizeComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
