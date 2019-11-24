import React from 'react';

import OverlayTrigger, { TriggerType } from 'src/components/Overlay/OverlayTrigger';

interface ITooltipProps {
  trigger?: TriggerType | TriggerType[];
}
const Tooltip = React.memo<ITooltipProps>(
  ({
    trigger = 'focus',
    children,
  }) => {
    return (
      <OverlayTrigger trigger={trigger} type="tooltip">
        {children}
      </OverlayTrigger>
    );
  }
);

export default Tooltip;
