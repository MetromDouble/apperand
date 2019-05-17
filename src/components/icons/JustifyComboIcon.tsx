import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType =
  'baseline' |
  'center' |
  'end' |
  'start' |
  'stretch';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'baseline': (<><path d="M7 14h1v-2h3V9H8V7h5V4H8V2H7v2H4v3h3v2H4v3h3v2zm0-9v1H5V5h2zm0 5v1H5v-1h2z" /></>),
  'center': (<><path d="M9 14V2H8v2H3v3h5v2H5v3h3v2zm1-10h4v3h-4zm0 5h2v3h-2z" /></>),
  'end': (<><path d="M13 2h1v12h-1zM2 4h10v3H2zm4 5h6v3H6z" /></>),
  'start': (<><path d="M4 4h10v3H4zm0 5h6v3H4zM2 2h1v12H2z" /></>),
  'stretch': (<><path d="M4 4h8v3H4zm0 5h8v3H4zM2 2h1v12H2zm11 0h1v12h-1z" /></>),
};

export const JustifyComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
