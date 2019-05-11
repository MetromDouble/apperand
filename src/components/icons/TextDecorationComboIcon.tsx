import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType =
  'overline' |
  'underline' |
  'line-through';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'overline': (<><path d="M12 4H4v2h3v7h2V6h3zM2 2h12v1H2z" /></>),
  'underline': (<><path d="M12 3H4v2h3v7h2V5h3zM2 13h12v1H2z" /></>),
  'line-through': (<><path d="M14 8H2v1h5v4h2V9h5zm-2-5H4v2h3v2h2V5h3z" /></>),
};

export const TextDecorationComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type }) => {
  return (
    <Icon size={size}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
