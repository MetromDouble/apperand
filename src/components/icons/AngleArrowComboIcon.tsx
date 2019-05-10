import React from 'react';
import { Icon, NoIcon, IIconProps } from 'src/components/icons/Icon';

type ComboType = 'n' | 'e' | 's' | 'w';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'n': (<path d="M8 6.8l4.2 4.3 1.5-1.4L8 4 2.3 9.7l1.5 1.4z" />),
  'e': (<path d="M9.2 8l-4.3 4.2 1.4 1.5L12 8 6.3 2.3 4.9 3.8z" />),
  's': (<path d="M8 9.2L3.8 4.9 2.3 6.3 8 12l5.7-5.7-1.5-1.4z" />),
  'w': (<path d="M6.8 8l4.3-4.2-1.4-1.5L4 8l5.7 5.7 1.4-1.5z" />),
};

interface IComboIconProps extends IIconProps {
  type: ComboType;
}

export const AngleArrowComboIcon: React.FC<IComboIconProps> = ({ size, type }) => {
  return (
    <Icon size={size}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
