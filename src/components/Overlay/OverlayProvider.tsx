import React, { useState } from 'react';

import { OverlayContext } from './OverlayContext';

interface ITabData {
  head: React.ReactNode;
  body: React.ReactNode;
  order?: number;
  selected?: boolean;
  onSelect?: () => void;
}

interface IOverlayProviderProps {
}
export const Tabs = React.memo<IOverlayProviderProps>(
  ({
    children
  }) => {
    const [modals, setModals] = useState<any>({});

    const addTooltip = (index: string, tooltip: React.ReactNode) => {};
    const removeTooltip = (index: string) => {};
    const addPopover = (index: string, popover: React.ReactNode) => {};
    const removePopover = () => {};
    const addModal = (index: string, modal: React.ReactNode) => {};
    const removeModal = (index: string) => {};

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
        }}
      >
        {children}
        <TabsHeadWrapper>
          {Object.keys(tabs)
            .sort((a, b) => (tabs[a].order || maxInt) - (tabs[b].order || maxInt))
            .map(key => (
              <TabHeadItem key={key} onClick={tabs[key].onSelect} active={tabs[key].selected}>
                {tabs[key].head}
              </TabHeadItem>
            ))
          }
        </TabsHeadWrapper>
        <TabsBodyWrapper>
          {Object.keys(tabs).filter(key => tabs[key].selected).map(key => tabs[key].body)}
        </TabsBodyWrapper>
      </OverlayContext.Provider>
    );
  }
);
