import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType =
  'block' |
  'flex' |
  'grid' |
  'inline' |
  'inline-block';

type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'block': (<><path d="M2 2h12v1H2zm0 11h12v1H2zm0-9v8h12V4H2zm10 6H4V6h8v4z" />></>),
  'flex': (<><path d="M13 2H2v12h12V2h-1zm0 11H3V3h10v10z" /><path d="M6 4H4v8h3V4H6zm5 0H8v8h4V4h-1z" /></>),
  'grid': (<><path d="M13 2H2v12h12V2h-1zm0 11H3V3h10v10z" /><path d="M6 4H4v3h3V4H6zm5 0H8v3h4V4h-1zM6 8H4v4h3V8H6zm4.7 0H8v4h4V8h-1.3z" /></>),
  'inline': (<><path d="M3 13V3h1V2H2v12h2v-1zM13 2h-1v1h1v10h-1v1h2V2zm-1 2H4v2h3v7h2V6h3z" /></>),
  'inline-block': (<><path d="M3 13V3h1V2H2v12h2v-1zM13 2h-1v1h1v10h-1v1h2V2zm-3 2H4v8h8V4h-2zm0 6H6V6h4v4z" /></>),
};


export const DisplayRuleComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
