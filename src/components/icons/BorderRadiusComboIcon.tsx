import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType = 'whole' | 'splitted' | 'ne' | 'se' | 'sw' | 'nw';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'whole': (<><path d="M2 4v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2zm9 8H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1z" /></>),
  'splitted': (<><path d="M4 7V5c0-.6.4-1 1-1h2V2H4c-1.1 0-2 .9-2 2v3h2zm0 4V9.1H2V12c0 1.1.9 2 2 2h3v-2H5c-.6 0-1-.4-1-1zm8-1.9V11c0 .6-.4 1-1 1H9v2h3c1.1 0 2-.9 2-2V9.1h-2zM12 5v2h2V4c0-1.1-.9-2-2-2H9v2h2c.6 0 1 .4 1 1z" /></>),
  'ne': (<><path d="M9 4h2c.6 0 1 .4 1 1v2h2V4c0-1.1-.9-2-2-2H9v2zm5 8V9h-1v2.5c0 .8-.7 1.5-1.5 1.5H9v1h3c1.1 0 2-.9 2-2zM4 14h3v-1H4.5c-.8 0-1.5-.7-1.5-1.5V9H2v3c0 1.1.9 2 2 2zM2 4v3h1V4.5C3 3.7 3.7 3 4.5 3H7V2H4c-1.1 0-2 .9-2 2z" /></>),
  'se': (<><path d="M12 9v2c0 .6-.4 1-1 1H9v2h3c1.1 0 2-.9 2-2V9h-2zm-8 5h3v-1H4.5c-.8 0-1.5-.7-1.5-1.5V9H2v3c0 1.1.9 2 2 2zM2 4v3h1V4.5C3 3.7 3.7 3 4.5 3H7V2H4c-1.1 0-2 .9-2 2zm10-2H9v1h2.5c.8 0 1.5.7 1.5 1.5V7h1V4c0-1.1-.9-2-2-2z" /></>),
  'sw': (<><path d="M7 12H5c-.6 0-1-.4-1-1V9H2v3c0 1.1.9 2 2 2h3v-2zM2 4v3h1V4.5C3 3.7 3.7 3 4.5 3H7V2H4c-1.1 0-2 .9-2 2zm10-2H9v1h2.5c.8 0 1.5.7 1.5 1.5V7h1V4c0-1.1-.9-2-2-2zm2 10V9h-1v2.5c0 .8-.7 1.5-1.5 1.5H9v1h3c1.1 0 2-.9 2-2z" /></>),
  'nw': (<><path d="M4 7V5c0-.6.4-1 1-1h2V2H4c-1.1 0-2 .9-2 2v3h2zm8-5H9v1h2.5c.8 0 1.5.7 1.5 1.5V7h1V4c0-1.1-.9-2-2-2zm2 10V9h-1v2.5c0 .8-.7 1.5-1.5 1.5H9v1h3c1.1 0 2-.9 2-2zM4 14h3v-1H4.5c-.8 0-1.5-.7-1.5-1.5V9H2v3c0 1.1.9 2 2 2z" /></>),
};


export const BorderRadiusComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
