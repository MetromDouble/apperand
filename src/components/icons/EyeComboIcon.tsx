import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType = 'visible' | 'hidden';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'visible': (<><path d="M8 4C5.4 4 3.2 5.7 2.3 8c.8 2.3 3 4 5.7 4s4.8-1.7 5.7-4c-.9-2.3-3.1-4-5.7-4zm0 7c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" /><circle cx="8" cy="8" r="1.5" /></>),
  'hidden': (<><path d="M13.273 1.916l.778.778L2.879 13.866 2.1 13.09zM5.1 8.9c0-.3-.1-.6-.1-.9 0-1.7 1.3-3 3-3 .3 0 .6.1.9.1l.9-.9C9.2 4.1 8.6 4 8 4 5.4 4 3.2 5.7 2.3 8c.3.9.8 1.6 1.4 2.2l1.4-1.3zm5.8-1.6c.1.2.1.5.1.7 0 1.7-1.3 3-3 3-.2 0-.5 0-.7-.1l-.9.9c.5.1 1.1.2 1.6.2 2.6 0 4.8-1.7 5.7-4-.3-.8-.7-1.5-1.3-2.1l-1.5 1.4z" /></>),
};

export const EyeComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type }) => {
  return (
    <Icon size={size}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
