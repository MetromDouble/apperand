import React, { useContext, useLayoutEffect } from 'react';

import { TabsContext } from './TabsContext';

interface ITabHeadProps {
  id: string;
  order?: number;
  children: React.ReactNode;
  selected?: boolean;
}

export const TabHead = React.memo<ITabHeadProps>(
  ({
    id,
    order,
    children,
    selected,
  }) => {
    const { addTabHead, selectTab } = useContext(TabsContext);

    useLayoutEffect(
      () => {
        if (addTabHead) {
          addTabHead(id, children, selectTab && selectTab.bind(null, id), order);
        }
        if (selected && selectTab) {
          selectTab(id);
        }
      },
      []
    );

    return null;
  }
);
