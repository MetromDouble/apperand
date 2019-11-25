import React, { useContext, useEffect, useRef } from 'react';
import nanoid from 'nanoid';

import OverlayTrigger, { TriggerType, DelayObject } from 'src/components/Overlay/OverlayTrigger';
import { OverlayContext } from 'src/components/Overlay/OverlayContext';
import TooltipBadge from './TooltipBadge';

interface ITooltipProps {
  text: string;
  trigger?: TriggerType | TriggerType[];
  delay?: number | DelayObject;
  children: React.ReactNode;
}
const Tooltip = React.memo<ITooltipProps>(
  ({
    text,
    trigger = 'hover',
    delay,
    children,
  }) => {
    const id = useRef(nanoid());
    const overlayContext = useContext(OverlayContext);

    useEffect(() => {
      overlayContext.addTooltip(id.current, (
        <TooltipBadge>{text}</TooltipBadge>
      ))

      return () => {
        overlayContext.removeTooltip(id.current)
      };
    }, []);

    return (
      <OverlayTrigger trigger={trigger} type="tooltip" id={id.current} delay={delay}>
        {children}
      </OverlayTrigger>
    );
  }
);

export default Tooltip;
