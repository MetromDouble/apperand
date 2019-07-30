import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/Icon';

type ComboType =
  'center' |
  'left' |
  'right' |
  'justify';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'center': (<><path d="M2 3h12v2H2zm3 4h6v2H5zm-1 4h8v2H4z" /></>),
  'left': (<><path d="M2 3h12v2H2zm0 4h6v2H2zm0 4h8v2H2z" /></>),
  'right': (<><path d="M2 3h12v2H2zm6 4h6v2H8zm-2 4h8v2H6z" /></>),
  'justify': (<><path d="M2 3h12v2H2zm0 4h12v2H2zm0 4h12v2H2z" /></>),
};

export const TextAlignComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
