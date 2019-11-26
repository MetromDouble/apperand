import React, { useState, cloneElement } from 'react';

import { OverlayContext } from './OverlayContext';
import { OverlayType } from './OverlayTrigger';
import { ITooltipElementProps } from 'src/components/Tooltip/TooltipElement';

interface ITooltipData {
  id: string;
  visible: boolean;
  component: React.ComponentType<ITooltipElementProps>;
  props: Record<string, any>;
  triggerElement?: HTMLElement | null;
}

interface IOverlayProviderProps {
}
const OverlayProvider: React.FC<IOverlayProviderProps> = (
  ({
    children
  }) => {
    const [tooltip, setTooltip] = useState<null | ITooltipData>(null);
    const [modals, setModals] = useState<any>({});

    const addTooltip = (id: string, component: React.ComponentType<ITooltipElementProps>, props: Record<string, any>) => {
      setTooltip({
        id,
        component,
        props,
        triggerElement: null,
        visible: false
      });
    };
    const removeTooltip = (id: string) => {
      setTooltip(null);
    };
    const addPopover = (id: string, popover: React.ReactNode) => {};
    const removePopover = (id: string) => {};
    const addModal = (id: string, modal: React.ReactNode) => {};
    const removeModal = (id: string) => {};
    const show = (id: string, type: OverlayType, triggerElement: HTMLElement | null) => {
      if (type === 'tooltip' && tooltip && tooltip.id === id) {
        setTooltip(() => ({ ...tooltip, visible: true, triggerElement }));
      }
    };
    const hide = (id: string, type: OverlayType) => {
      if (type === 'tooltip' && tooltip && tooltip.id === id) {
        setTooltip(() => ({ ...tooltip, visible: false }));
      }
    };

    return (
      <OverlayContext.Provider
        value={{
          addTooltip,
          removeTooltip,
          addPopover,
          removePopover,
          addModal,
          removeModal,
          show,
          hide,
        }}
      >
        {children}
        {tooltip
          && tooltip.visible
          && tooltip.triggerElement
          && <tooltip.component {...(tooltip.props as ITooltipElementProps)} triggerElement={tooltip.triggerElement} />
      }
      </OverlayContext.Provider>
    );
  }
);

export default OverlayProvider;
