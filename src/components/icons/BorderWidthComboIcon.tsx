import React from 'react';
import { Icon, NoIcon, IIconProps } from 'src/components/icons/Icon';

type ComboType = 'all' | 'top' | 'right' | 'bottom' | 'left';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'all': (<><path d="M2 2v12h12V2H2zm10 10H4V4h8v8z" /></>),
  'top': (<><path d="M3 4h11V2H2v2zm10 1v8H3V5H2v9h12V5z" /></>),
  'right': (<><path d="M12 3v11h2V2h-2zm-1 10H3V3h8V2H2v12h9z" /></>),
  'bottom': (<><path d="M13 12H2v2h12v-2zM3 11V3h10v8h1V2H2v9z" /></>),
  'left': (<><path d="M4 13V2H2v12h2zM5 3h8v10H5v1h9V2H5z" /></>),
};

interface IComboIconProps extends IIconProps {
  type: ComboType;
}

export const BorderWidthComboIcon: React.FC<IComboIconProps> = ({ size, type }) => {
  return (
    <Icon size={size}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
