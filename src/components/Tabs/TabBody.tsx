import React, { useContext, useLayoutEffect } from 'react';

import { TabsContext } from './TabsContext';

interface ITabBodyProps {
  id: string;
  children: React.ReactNode;
}

export const TabBody = React.memo<ITabBodyProps>(
  ({
    id,
    children
  }) => {
    const { addTabBody } = useContext(TabsContext);

    useLayoutEffect(
      () => {
        if (addTabBody) {
          addTabBody(id, children);
        }
      },
      []
    );

    return null;
  }
);
