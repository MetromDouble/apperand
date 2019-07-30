import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/Icon';

type ComboType =
  'center' |
  'end' |
  'space-around' |
  'space-between' |
  'start' |
  'stretch';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'center': (<><path d="M3 4h3v3H3zm0 5h3v3H3zm4-7h1v12H7zm2 2h3v3H9zm0 5h3v3H9z" /></>),
  'end': (<><path d="M9 9h3v3H9zm0-5h3v3H9zm4-2h1v12h-1zM5 9h3v3H5zm0-5h3v3H5z" /></>),
  'space-around': (<><path d="M8 9h3v3H8zm0-5h3v3H8zm5-2h1v12h-1zM5 9h2v3H5zm0-5h2v3H5zM2 2h1v12H2z" /></>),
  'space-between': (<><path d="M9 9h3v3H9zm0-5h3v3H9zm4-2h1v12h-1zM4 9h2v3H4zm0-5h2v3H4zM2 2h1v12H2z" /></>),
  'start': (<><path d="M4 4h3v3H4zm0 5h3v3H4zM2 2h1v12H2zm6 2h3v3H8zm0 5h3v3H8z" /></>),
  'stretch': (<><path d="M9 9h3v3H9zm0-5h3v3H9zm4-2h1v12h-1zM4 9h4v3H4zm0-5h4v3H4zM2 2h1v12H2z" /></>),
};

export const JustifyContentComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
