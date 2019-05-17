import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';

type ComboType = 'x' | 'y' | 'z';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'x': (<><circle cx="8.5" cy="9.5" r="1.5" /><path d="M9 9h5v1H9zm-.5-2c.2 0 .3 0 .5.1V4H8v3.1c.2-.1.3-.1.5-.1zm-2.1 3.9l-2.3 2.3.7.7 2.3-2.3c-.3-.2-.5-.4-.7-.7zM5.6 2H4.4l-.6 1-.6-1H2l1.2 2L2 6h1.2l.6-1 .6 1h1.2L4.4 4z" /><path d="M12.9 11.6L15 9.5l-2.1-2.1z" /></>),
  'y': (<><circle cx="8.5" cy="9.5" r="1.5" /><path d="M8 4h1v5H8zm-1.6 6.9l-2.3 2.3.7.7 2.3-2.3c-.3-.2-.5-.4-.7-.7zM10.9 9c.1.2.1.3.1.5s0 .3-.1.5H14V9h-3.1zM5.6 2H4.4l-.6 1.4L3.2 2H2l1.3 2.4V6h1V4.4z" /><path d="M10.6 5L8.5 2.9 6.4 5z" /></>),
  'z': (<><circle cx="8.5" cy="9.5" r="1.5" /><path d="M8.177 9.048l.707.707-4.1 4.1-.708-.706zM8.5 7c.2 0 .3 0 .5.1V4H8v3.1c.2-.1.3-.1.5-.1zm2.4 2c.1.2.1.3.1.5s0 .3-.1.5H14V9h-3.1zM5 2H2v1h1.7L2 5v1h3V5H3.3L5 3z" /><path d="M4 11v3h3z" /></>),
};


export const AxisComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type, ...props }) => {
  return (
    <Icon size={size} {...props}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
