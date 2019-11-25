import React, { useState } from 'react';

import { OverlayContext } from './OverlayContext';
import { OverlayType } from './OverlayTrigger';

interface ITooltipData {
  id: string;
  visible: boolean;
  child: React.ReactNode;
}

interface IOverlayProviderProps {
}
const OverlayProvider = React.memo<IOverlayProviderProps>(
  ({
    children
  }) => {
    const [tooltip, setTooltip] = useState<null | ITooltipData>(null);
    const [modals, setModals] = useState<any>({});

    const addTooltip = (id: string, tooltip: React.ReactNode) => {
      setTooltip({
        id,
        child: tooltip,
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
    const show = (id: string, type: OverlayType) => {
      if (type === 'tooltip' && tooltip && tooltip.id === id) {
        setTooltip(() => ({ ...tooltip, visible: true }));
      }
    };
    const hide = (id: string, type: OverlayType) => {
      if (type === 'tooltip' && tooltip && tooltip.id === id) {
        setTooltip(() => ({ ...tooltip, visible: false }));
      }
    };

    const maxInt = Number.MAX_SAFE_INTEGER;

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
        {tooltip && tooltip.visible && tooltip.child}
      </OverlayContext.Provider>
    );
  }
);

export default OverlayProvider;
