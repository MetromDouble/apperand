import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/Icon';

type ComboType = 'space-around' | 'space-between' | 'center' | 'end' | 'start' | 'stretch';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'center': (<path d="M9 3h3v3H9zM4 3h3v3H4zM2 7h12v1H2zm7 2h3v3H9zM4 9h3v3H4z" />),
  'end': (<path d="M4 9h3v3H4zm5 0h3v3H9zm-7 4h12v1H2zm2-8h3v3H4zm5 0h3v3H9z" />),
  'space-around': (<path d="M4 8h3v3H4zm5 0h3v3H9zm-7 5h12v1H2zm2-8h3v2H4zm5 0h3v2H9zM2 2h12v1H2z" />),
  'space-between': (<path d="M4 9h3v3H4zm5 0h3v3H9zm-7 4h12v1H2zm2-9h3v2H4zm5 0h3v2H9zM2 2h12v1H2z" />),
  'start': (<path d="M9 4h3v3H9zM4 4h3v3H4zM2 2h12v1H2zm7 6h3v3H9zM4 8h3v3H4z" />),
  'stretch': (<path d="M4 9h3v3H4zm5 0h3v3H9zm-7 4h12v1H2zm2-9h3v4H4zm5 0h3v4H9zM2 2h12v1H2z" />),
};


export const AlignContentComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
