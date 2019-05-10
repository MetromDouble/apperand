import React from 'react';
import { Icon, NoIcon, IIconProps } from 'src/components/icons/Icon';

type ComboType = 'baseline' | 'center' | 'end' | 'start' | 'stretch';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'baseline': (<path d="M12 7V4H9v3H7V4H4v3H2v1h2v5h3V8h2v3h3V8h2V7h-2zM5 5h1v2H5V5zm5 0h1v2h-1V5z" />),
  'center': (<path d="M14 7H2v1h2v5h3V8h2v3h3V8h2zM4 2h3v4H4zm5 2h3v2H9z" />),
  'end': (<path d="M4 2h3v10H4zm5 4h3v6H9zm-7 7h12v1H2z" />),
  'start': (<path d="M2 2h12v1H2zm2 2h3v10H4zm5 0h3v6H9z" />),
  'stretch': (<path d="M4 4h3v8H4zm5 0h3v8H9zm-7 9h12v1H2zM2 2h12v1H2z" />),
};

interface IComboIconProps extends IIconProps {
  type: ComboType;
}

export const AlignComboIcon: React.FC<IComboIconProps> = ({ size, type }) => {
  return (
    <Icon size={size}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
