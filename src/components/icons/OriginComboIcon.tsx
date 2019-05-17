import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType =
  'center' |
  'n' |
  'ne' |
  'e' |
  'se' |
  's' |
  'sw' |
  'w' |
  'nw';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'center': (<><circle cx="8" cy="8" r="1.5" /><path d="M15 8l-2.8-2.8V7H11v2h1.2v1.8zM8 1L5.2 3.8H7V5h2V3.8h1.8zM1 8l2.8 2.8V9H5V7H3.8V5.2zm7 7l2.8-2.8H9V11H7v1.2H5.2z" /></>),
  'n': (<><circle cx="8" cy="8" r="1.5" /><path d="M15 8l-2.8-2.8V7H11v2h1.2v1.8zM1 8l2.8 2.8V9H5V7H3.8V5.2zm7 7l2.8-2.8H9V11H7v1.2H5.2z" /></>),
  'ne': (<><circle cx="8" cy="8" r="1.5" /><path d="M1 8l2.8 2.8V9H5V7H3.8V5.2zm7 7l2.8-2.8H9V11H7v1.2H5.2z" /></>),
  'e': (<><circle cx="8" cy="8" r="1.5" /><path d="M8 1L5.2 3.8H7V5h2V3.8h1.8zM1 8l2.8 2.8V9H5V7H3.8V5.2zm7 7l2.8-2.8H9V11H7v1.2H5.2z" /></>),
  'se': (<><circle cx="8" cy="8" r="1.5" /><path d="M8 1L5.2 3.8H7V5h2V3.8h1.8zM1 8l2.8 2.8V9H5V7H3.8V5.2z" /></>),
  's': (<><circle cx="8" cy="8" r="1.5" /><path d="M15 8l-2.8-2.8V7H11v2h1.2v1.8zM8 1L5.2 3.8H7V5h2V3.8h1.8zM1 8l2.8 2.8V9H5V7H3.8V5.2z" /></>),
  'sw': (<><circle cx="8" cy="8" r="1.5" /><path d="M15 8l-2.8-2.8V7H11v2h1.2v1.8zM8 1L5.2 3.8H7V5h2V3.8h1.8z" /></>),
  'w': (<><circle cx="8" cy="8" r="1.5" /><path d="M15 8l-2.8-2.8V7H11v2h1.2v1.8zM8 1L5.2 3.8H7V5h2V3.8h1.8zm0 14l2.8-2.8H9V11H7v1.2H5.2z" /></>),
  'nw': (<><circle cx="8" cy="8" r="1.5" /><path d="M15 8l-2.8-2.8V7H11v2h1.2v1.8zm-7 7l2.8-2.8H9V11H7v1.2H5.2z" /></>),
};

export const OriginComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
