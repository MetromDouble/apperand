import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';
import { ZoomInIcon } from 'src/components/icons/ZoomInIcon';
import { ZoomOutIcon } from 'src/components/icons/ZoomOutIcon';

type ComboType =
  'ltr' |
  'rtl';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'ltr': (<><path d="M4 3c-.8 0-1.5.7-1.5 1.5S3.2 6 4 6v4h2V4h2v6h2V4h1V3H4zm0 10h8v1l2-2-2-2v1H4z" /></>),
  'rtl': (<><path d="M6 3c-.8 0-1.5.7-1.5 1.5S5.2 6 6 6v4h2V4h2v6h2V4h1V3H6zm6 8H4v-1l-2 2 2 2v-1h8z" /></>),
};

export const TextDirectionComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type }) => {
  return (
    <Icon size={size}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
