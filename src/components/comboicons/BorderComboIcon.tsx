import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/Icon';

type ComboType =
  'all' |
  'none' |
  'outer' |
  'inner' |
  'top' |
  'right' |
  'bottom' |
  'left' |
  'middle-horizontal' |
  'middle-vertical' |
  'part-row' |
  'part-column' |
  'part-cell';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'all': (<><path d="M9 2H2v13h13V2H9zM3 3h5v5H3V3zm0 11V9h5v5H3zm11 0H9V9h5v5zM9 8V3h5v5H9z" /></>),
  'none': (<><path d="M6 14h1v1H6zm0-6h1v1H6zm0-6h1v1H6zM2 2h1v1H2zm0 12h1v1H2zm0-8h1v1H2zm0 2h1v1H2zm0 2h1v1H2zm0-6h1v1H2zm0 8h1v1H2zm2-4h1v1H4zm0 6h1v1H4zM4 2h1v1H4zm8 0h1v1h-1zm0 6h1v1h-1zm0 6h1v1h-1zm-4 0h1v1H8zM8 4h1v1H8zm0 6h1v1H8zm0-2h1v1H8zm0-6h1v1H8zm0 10h1v1H8zm0-6h1v1H8zm2 2h1v1h-1zm0 6h1v1h-1zm0-12h1v1h-1zm4 0h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zm0-6h1v1h-1z" /></>),
  'outer': (<><path d="M6 8h1v1H6zM4 8h1v1H4zm8 0h1v1h-1zM8 4h1v1H8zm0 6h1v1H8zm0-2h1v1H8zm0 4h1v1H8zm0-6h1v1H8zm2 2h1v1h-1z" /><path d="M2 2v13h13V2H2zm12 12H3V3h11v11z" /></>),
  'inner': (<><path d="M6 14h1v1H6zM6 2h1v1H6zM2 2h1v1H2zm0 12h1v1H2zm0-8h1v1H2zm0 4h1v1H2zm0-6h1v1H2zm0 8h1v1H2zm2 2h1v1H4zM4 2h1v1H4zm8 0h1v1h-1zm0 12h1v1h-1zm-2 0h1v1h-1zm0-12h1v1h-1zm4 0h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1z" /><path d="M15 8H9V2H8v6H2v1h6v6h1V9h6z" /></>),
  'top': (<><path d="M6 14h1v1H6zm0-6h1v1H6zM2 2h13v1H2zm0 12h1v1H2zm0-8h1v1H2zm0 2h1v1H2zm0 2h1v1H2zm0-6h1v1H2zm0 8h1v1H2zm2-4h1v1H4zm0 6h1v1H4zm8-6h1v1h-1zm0 6h1v1h-1zm-4 0h1v1H8zM8 4h1v1H8zm0 6h1v1H8zm0-2h1v1H8zm0 4h1v1H8zm0-6h1v1H8zm2 2h1v1h-1zm0 6h1v1h-1zm4-8h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zm0-6h1v1h-1z" /></>),
  'right': (<><path d="M6 14h1v1H6zm0-6h1v1H6zm0-6h1v1H6zM2 2h1v1H2zm0 12h1v1H2zm0-8h1v1H2zm0 2h1v1H2zm0 2h1v1H2zm0-6h1v1H2zm0 8h1v1H2zm2-4h1v1H4zm0 6h1v1H4zM4 2h1v1H4zm8 0h1v1h-1zm0 6h1v1h-1zm0 6h1v1h-1zm-4 0h1v1H8zM8 4h1v1H8zm0 6h1v1H8zm0-2h1v1H8zm0-6h1v1H8zm0 10h1v1H8zm0-6h1v1H8zm2 2h1v1h-1zm0 6h1v1h-1zm0-12h1v1h-1zm4 0h1v13h-1z" /></>),
  'bottom': (<><path d="M6 8h1v1H6zm0-6h1v1H6zM2 2h1v1H2zm0 12h13v1H2zm0-8h1v1H2zm0 2h1v1H2zm0 2h1v1H2zm0-6h1v1H2zm0 8h1v1H2zm2-4h1v1H4zm0-6h1v1H4zm8 0h1v1h-1zm0 6h1v1h-1zM8 4h1v1H8zm0 6h1v1H8zm0-2h1v1H8zm0-6h1v1H8zm0 10h1v1H8zm0-6h1v1H8zm2 2h1v1h-1zm0-6h1v1h-1zm4 0h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0-2h1v1h-1z" /></>),
  'left': (<><path d="M6 14h1v1H6zm0-6h1v1H6zm0-6h1v1H6zM2 2h1v13H2zm2 6h1v1H4zm0 6h1v1H4zM4 2h1v1H4zm8 0h1v1h-1zm0 6h1v1h-1zm0 6h1v1h-1zm-4 0h1v1H8zM8 4h1v1H8zm0 6h1v1H8zm0-2h1v1H8zm0-6h1v1H8zm0 10h1v1H8zm0-6h1v1H8zm2 2h1v1h-1zm0 6h1v1h-1zm0-12h1v1h-1zm4 0h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zm0-6h1v1h-1z" /></>),
  'middle-horizontal': (<><path d="M6 14h1v1H6zM6 2h1v1H6zM2 2h1v1H2zm0 12h1v1H2zm0-8h1v1H2zm0 4h1v1H2zm0-6h1v1H2zm0 8h1v1H2zm2 2h1v1H4zM4 2h1v1H4zm8 0h1v1h-1zm0 12h1v1h-1zm-4 0h1v1H8zM8 4h1v1H8zm0 6h1v1H8zm0-8h1v1H8zm0 10h1v1H8zm0-6h1v1H8zm2 8h1v1h-1zm0-12h1v1h-1zm4 0h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zM2 8h13v1H2z" /></>),
  'middle-vertical': (<><path d="M6 14h1v1H6zm0-6h1v1H6zm0-6h1v1H6zM2 2h1v1H2zm0 12h1v1H2zm0-8h1v1H2zm0 2h1v1H2zm0 2h1v1H2zm0-6h1v1H2zm0 8h1v1H2zm2-4h1v1H4zm0 6h1v1H4zM4 2h1v1H4zm8 0h1v1h-1zm0 6h1v1h-1zm0 6h1v1h-1zM8 2h1v13H8zm2 6h1v1h-1zm0 6h1v1h-1zm0-12h1v1h-1zm4 0h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zm0-6h1v1h-1z" /></>),
  'part-row': (<><path d="M6 14h1v1H6zm-4 0h1v1H2zm0-4h1v1H2zm0 2h1v1H2zm2 2h1v1H4zm8 0h1v1h-1zm-4 0h1v1H8zm0-4h1v1H8zm0 2h1v1H8zm2 2h1v1h-1zm4-2h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zM2 2v7h13V2H2zm12 6H3V3h11v5z" /></>),
  'part-column': (<><path d="M12 2h1v1h-1zm0 6h1v1h-1zm0 6h1v1h-1zm-2-6h1v1h-1zm0 6h1v1h-1zm0-12h1v1h-1zm4 0h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zm0-6h1v1h-1zM2 2v13h7V2H2zm6 12H3V3h5v11z" /></>),
  'part-cell': (<><path d="M6 14h1v1H6zm-4 0h1v1H2zm0-4h1v1H2zm0 2h1v1H2zm2 2h1v1H4zm8-12h1v1h-1zm0 6h1v1h-1zm0 6h1v1h-1zm-4 0h1v1H8zm0-4h1v1H8zm0 2h1v1H8zm2-4h1v1h-1zm0 6h1v1h-1zm0-12h1v1h-1zm4 0h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zm0-6h1v1h-1zM2 2v7h7V2H2zm6 6H3V3h5v5z" /></>),
};


export const BorderComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
