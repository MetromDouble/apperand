import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType = 'common' | 'clockwise' | 'counterclockwise';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'common': (<><circle cx="4.5" cy="10.5" r="1.5" /><path d="M8 3c-1.4 0-2.6.6-3.5 1.5L3 3v4h4L5.5 5.5c.6-.6 1.5-1 2.5-1 1.9 0 3.5 1.6 3.5 3.5S9.9 11.5 8 11.5c-.4 0-.8-.1-1.1-.2-.2.5-.5.9-.9 1.2.6.3 1.3.5 2 .5 2.8 0 5-2.2 5-5s-2.2-5-5-5z" /></>),
  'clockwise': (<><path d="M4.5 4.5c2-2 5.1-2 7.1 0L13 3v4H9l1.5-1.5c-1.4-1.4-3.6-1.4-4.9 0s-1.4 3.6 0 4.9 3.6 1.4 4.9 0c.3-.3.5-.6.7-.9l1.1 1.1c-.2.3-.4.6-.7.9-2 2-5.1 2-7.1 0-2-1.9-2-5.1 0-7z" /></>),
  'counterclockwise': (<><path d="M11.5 4.5c-2-2-5.1-2-7.1 0L3 3v4h4L5.5 5.5c1.4-1.4 3.6-1.4 4.9 0s1.4 3.6 0 4.9-3.6 1.4-4.9 0c-.3-.2-.5-.5-.6-.9l-1.1 1.1c.2.4.4.7.7.9 2 2 5.1 2 7.1 0 1.9-1.9 1.9-5.1-.1-7z" /></>),
};

export const RotateComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type }) => {
  return (
    <Icon size={size}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
